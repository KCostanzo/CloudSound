Rails.application.routes.draw do
  root to: "static_pages#root"
  namespace :api, defaults: {format: :json} do

    resources :users, only: [:create,:update,:show]

    resource :session, only: [:create,:destroy, :show]

    resources :songs, except: [:new, :edit]

    	get 'artist/:artist', to: 'songs#index_by_artist'
  end
end
