class Like < ActiveRecord::Base
	validates :user_id, :song_id, presence: true
	belongs_to :user
	belongs_to :liked_song,
		foreign_key: :song_id,
		class_name: "Song"
end
