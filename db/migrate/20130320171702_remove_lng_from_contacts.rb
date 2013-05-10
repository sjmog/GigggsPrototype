class RemoveLngFromContacts < ActiveRecord::Migration
  def up
    remove_column :contacts, :lng
  end

  def down
    add_column :contacts, :lng, :str
  end
end
