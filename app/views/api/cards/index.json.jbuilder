@cards.each do |card|
    json.set! card.id do
        json.extract! card, :id, :title, :description, :due_date, :list_id, :prev_id, :next_id
        # json.commentIds card.comment_ids
    end
end