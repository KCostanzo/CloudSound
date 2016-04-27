class Api::UsersController < ApplicationController
  before_action :require_login, only: :update

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :user_created
    else
      render json: {errors: @user.errors.full_messages}, status: 401
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes
      render :updated
    else
      render json: {errors: @user.errors.full_messages}
    end
  end

  private

  def user_params
    params.require(:user).permit(:username,:password)
  end
end
