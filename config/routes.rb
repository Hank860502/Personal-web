Rails.application.routes.draw do
  get 'welcome/index'
  resources :athlete
  resources :developer
  resources :entrepreneur
  resources :about
  resources :portfolio
  
  root 'welcome#index'

end
