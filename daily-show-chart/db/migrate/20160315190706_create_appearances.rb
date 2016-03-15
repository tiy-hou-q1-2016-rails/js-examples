class CreateAppearances < ActiveRecord::Migration
  def change
    create_table :appearances do |t|
      t.integer :year
      t.string :occupation
      t.date :show_date
      t.string :group
      t.string :guest_list

      t.timestamps null: false
    end
  end
end
