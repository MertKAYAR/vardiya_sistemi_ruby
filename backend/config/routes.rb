# backend/config/routes.rb
Rails.application.routes.draw do
  get "up" => "rails/health#show", as: :rails_health_check

  namespace :api do
    namespace :v1 do
      # Shift modelini kullanıyoruz
      resources :shifts, only: [:index, :create] 
    end
  end
end