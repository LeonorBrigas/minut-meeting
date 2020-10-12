Rails.application.routes.draw do
  # devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
root to: "pages#about"


get '/get_in_touch', to: 'pages#get_in_touch'

end
