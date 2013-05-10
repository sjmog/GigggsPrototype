class AddLngToContacts < ActiveRecord::Migration
  def change
    add_column :contacts, :lng, :float
  end
end
