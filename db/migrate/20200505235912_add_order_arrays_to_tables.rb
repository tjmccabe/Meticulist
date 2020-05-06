class AddOrderArraysToTables < ActiveRecord::Migration[5.2]
  def change
    add_column :lists, :next_id, :integer
    add_column :lists, :prev_id, :integer
    add_column :cards, :next_id, :integer
    add_column :cards, :prev_id, :integer
  end
end
