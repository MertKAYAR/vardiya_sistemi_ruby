# app/controllers/application_controller.rb

# TÜM Controller'ların miras alacağı temel sınıfı API olarak değiştiriyoruz.
class ApplicationController < ActionController::API
  # Opsiyonel: Bazen CORS gereklilikleri için buraya ekleme yapılır, şimdilik sadece API kalacak.
end