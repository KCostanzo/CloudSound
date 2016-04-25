class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login!(@user)
      render :loggedin
    else
      render json: {errors: ["Invalid Username or Password"]}
    end
  end

  def destroy
    logout!
    render json: {}
  end
end
