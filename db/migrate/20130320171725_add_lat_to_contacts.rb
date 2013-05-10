class AddLatToContacts < ActiveRecord::Migration
  def change
    add_column :contacts, :lat, :float
  end
end
