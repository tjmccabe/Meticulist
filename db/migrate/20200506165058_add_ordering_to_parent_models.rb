class AddOrderingToParentModels < ActiveRecord::Migration[5.2]
  def change
    add_column :boards, :list_order, :text, default: "[]"
    add_column :lists, :card_order, :text, default: "[]"
  end
end
