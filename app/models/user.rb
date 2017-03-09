class User < ActiveRecord::Base
  validates :username, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}

  after_initialize :ensure_session_token
  before_save :downcase_username

  has_many :songs
  has_many :playlists
  has_many :likes
  has_many :liked_songs,
    through: :likes,
    source: :liked_song

  has_attached_file :db_song, default_url: "/Nas_Damian_Jr_Gong_Marley_-_Nah_Mean[www.MP3Fiber.com].mp3"
  validates_attachment_content_type :db_song, content_type: /\Amp3\/.*\z/

  attr_reader :password

  def self.find_by_credentials(username,password)
    user = self.find_by(username: username.downcase)

    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  private
  def downcase_username
    self.username = self.username.downcase
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

end
