class TweakSchema < ActiveRecord::Migration[5.2]
  def change
    remove_column :cards, :next_id
    remove_column :cards, :prev_id
    remove_column :lists, :next_id
    remove_column :lists, :prev_id

    change_column :cards, :description, :string, :default => ""
  end
end
