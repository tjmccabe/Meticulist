@lists.each do |list|
    json.set! list.id do
        json.extract! list, :id, :title, :board_id, :prev_id, :next_id
        json.cardIds list.card_ids
    end
end