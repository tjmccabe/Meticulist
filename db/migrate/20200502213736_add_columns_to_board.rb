class AddColumnsToBoard < ActiveRecord::Migration[5.2]
  def change
    add_column :boards, :bgp_big_url, :text
    add_column :boards, :bgp_small_url, :text
    add_column :boards, :bgp_alt_text, :text
  end
end
