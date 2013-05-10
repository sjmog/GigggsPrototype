class RemoveLatFromContacts < ActiveRecord::Migration
  def up
    remove_column :contacts, :lat
  end

  def down
    add_column :contacts, :lat, :str
  end
end
