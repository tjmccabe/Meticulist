class CreateBoards < ActiveRecord::Migration[5.2]
  def change
    create_table :boards do |t|
      t.integer :admin_id, null: false
      t.string :title, null: false
      t.text :description

      t.timestamps
    end
    add_index :boards, :admin_id
  end
end
