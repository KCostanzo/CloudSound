class Api::LikesController < ApplicationController

	def index
		if current_user
			@user = current_user
			render :index
		else
			@errors = nil
      		render "api/shared/errors", status: 299
    	end
	end

	def create
		@like = Like.new(user_id: current_user.id,song_id: params[:song_id])
		if @like.save
			# render :show
			@user = current_user
			render :index
		else
			@errors = @like.errors.full_messages
			render 'api/shared/errors', status: 422
		end
	end

	def destroy
		like = Like.find_by(user_id: current_user.id,song_id: params[:song_id])
		like.destroy
		render json: {song_id: params[:song_id]}

		# @user = current_user
		# redner :index
		# might make things way easier
	end
end
