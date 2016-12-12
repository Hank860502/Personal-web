Rails.application.routes.draw do
  get 'welcome/index'
  resources :athlete
  resources :developer
  resources :about
  
  root 'welcome#index'

end
