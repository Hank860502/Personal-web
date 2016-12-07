Rails.application.routes.draw do
  get 'welcome/index'
  resources :athlete

  root 'welcome#index'

end
