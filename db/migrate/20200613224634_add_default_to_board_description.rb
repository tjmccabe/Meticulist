class AddDefaultToBoardDescription < ActiveRecord::Migration[5.2]
  def change
    change_column :boards, :description, :text, :default => ""
    change_column :cards, :description, :text, :default => ""
  end
end
