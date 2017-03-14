class DbSong < ActiveRecord::Base
	validates :user_id, presence: true
	
# has_attached_file :aws_song, default_url: "/images/:style/missing.png"
# validates_attachment_content_type :aws_song, content_type: /\Aimage\/.*\z/


	belongs_to :user
end
