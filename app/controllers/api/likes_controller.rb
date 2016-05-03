class Api::LikesController < ApplicationController

	def index
		@user = current_user
		render :index
	end

	# def index_songs
	# 	@songs = Song.where(id: params[:like][:song_id])
	# 	render 'api/songs/index'
	# end

	def create
		#toggle likes
		@like = Like.find_by(user_id: current_user.id,song_id: params[:song_id])
		if @like 
			@like.destroy
			render :show
			return
		end

		@like = Like.new(user_id: current_user.id,song_id: params[:song_id])
		if @like.save
			render :show
		else
			@errors = @like.errors.full_messages
			render 'api/shared/errors', status: 422
		end

	end
end
