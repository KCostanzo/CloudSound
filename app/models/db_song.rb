class DbSong < ActiveRecord::Base
	validates :user_id, presence: true
	
	has_attached_file :aws_song, default_url: "Nah_Mean.mp3"
	# validates_attachment_content_type :aws_song, content_type: /\Aaudio\/.*\z/

	belongs_to :user
end
