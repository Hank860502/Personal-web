Rails.application.routes.draw do
  get 'welcome/index'
  resources :athlete
  resources :developer

  root 'welcome#index'

end
