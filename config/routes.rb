Rails.application.routes.draw do
  namespace :api do
    get 'greetings/random', to: 'messages#random_greeting'
  end
  root 'api/messages#random_greeting'
end