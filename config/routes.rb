EmberDataExample::Application.routes.draw do
  devise_for :users, :controllers => {:sessions => 'sessions'}
  
  resources :users do
  	resources :contacts
  match "/users/:id" => "users#show"
  end
  scope "/api" do
    scope "/v1" do
      resources :tokens, only: [:create, :destroy]
      resource :authorization, only: [:show]
      resources :users, only: [:show]
    end
  end
  resources :contacts
  root :to => 'application#index'
  match '/' => 'application#index'
end
