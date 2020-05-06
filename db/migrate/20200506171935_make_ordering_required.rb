class MakeOrderingRequired < ActiveRecord::Migration[5.2]
  def change
    change_column :boards, :list_order, :text, default: "[]", null: false
    change_column :lists, :card_order, :text, default: "[]", null: false
  end
end
