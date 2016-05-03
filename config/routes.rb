Rails.application.routes.draw do
  root to: "static_pages#root"
  namespace :api, defaults: {format: :json} do

    resources :users, only: [:create,:update,:show]

    resource :session, only: [:create,:destroy, :show]

    resources :songs, except: [:new, :edit]

    	get 'artist/:artist', to: 'songs#index_by_artist'

	resources :likes, only: [:index,:create]

		# get 'likes/:user_id', to: 'likes#index_songs'
  end

end
