class Song < ActiveRecord::Base
	validates :title, :artist, :audio_url, presence: true
end
