class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login!(@user)
      render :loggedin
    else
      render json: "Invalid Username or Password", status: 404
    end
  end

  def destroy
    logout!
    render json: {}
  end

  def show
    if current_user 
      @user = current_user
      render "api/users/user_created"
    else
      @errors = nil
      render "api/shared/errors", status: 299
    end
  end
end
