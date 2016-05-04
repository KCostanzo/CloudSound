class Song < ActiveRecord::Base
	validates :title, :artist, :audio_url, presence: true

	has_many :likes,
		foreign_key: :song_id,
		class_name: "Like"

	belongs_to :user
end
