class CreateShifts < ActiveRecord::Migration[7.1]
  def change
    create_table :shifts do |t|
      t.string :employee_name
      t.date :shift_date
      t.time :start_time
      t.time :end_time

      t.timestamps
    end
  end
end
