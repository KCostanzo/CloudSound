class Api::SongsController < ApplicationController

	def index
		@songs = Song.all
		render 'api/songs/index'
	end

	def create
		@song = Song.new(song_params)
		if @song.save
			render 'api/songs/show'
		else
			@errors = @song.errors.full_messages
			render 'api/shared/errors', status: 420
		end
	end

	def show
		@song = Song.find(params[:id])
		render 'api/songs/show'
	end

	def update
	end

	def destroy
	end

	private
	def song_params
		params.require(:song).permit(:title,:artist,:description,:image_url,:audio_url,:user_id)
	end
end
