# backend/app/controllers/api/v1/shifts_controller.rb

class Api::V1::ShiftsController < ApplicationController
  # API Only olduğu için güvenlik token kontrolünü devre dışı bırakıyoruz.
  # (Bu, ApplicationController'da ActionController::API ile zaten çözülmüş olmalıydı.)

  # GET /api/v1/shifts (Vardiya Listesi)
  def index
    @shifts = Shift.all
    render json: @shifts
  end

  # POST /api/v1/shifts (Vardiya Oluşturma)
  def create
    @shift = Shift.new(shift_params)
    if @shift.save
      render json: @shift, status: :created
    else
      # Hata durumunda 422 Unprocessable Entity döner
      render json: @shift.errors, status: :unprocessable_entity 
    end
  end

  private

  # Güvenli parametreler: Yeni alanlarımızı buraya ekledik
  def shift_params
    params.require(:shift).permit(:employee_name, :shift_date, :start_time, :end_time)
  end
end