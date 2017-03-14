Rails.application.routes.draw do
  resources :db_songs
  root to: "static_pages#root"
  namespace :api, defaults: {format: :json} do

    resources :users, only: [:create,:update,:show]

    resource :session, only: [:create,:destroy, :show]

    resources :songs, except: [:new, :edit]

    	get 'artist/:artist', to: 'songs#index_by_artist'

	resources :likes, only: [:index,:create,:destroy]

    resources :db_songs, only: [:create, :index, :update, :edit, :show, :destroy]

		# get 'likes/:user_id', to: 'likes#index_songs'
  end

end
