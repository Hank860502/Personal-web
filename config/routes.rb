Rails.application.routes.draw do
  get 'welcome/index'
  resources :athlete
  resources :developer
  resources :about
  resources :entrepreneur
  
  root 'welcome#index'

end
