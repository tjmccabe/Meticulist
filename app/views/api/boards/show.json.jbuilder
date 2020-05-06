json.board do
    json.extract! @board,
            :id,
            :title,
            :description,
            :admin_id,
            :bgp_big_url,
            :bgp_small_url,
            :bgp_alt_text
    json.admin @board.admin
    json.listIds @board.list_ids
    # json.memberIds do
    #     json.array! @board.members, :id
    # end
end

json.lists do
    @board.lists.each do |list|
        json.set! list.id do
            json.extract! list, :id, :title, :board_id, :prev_id, :next_id
            json.cardIds list.card_ids
        end
    end
end

json.cards do
    @board.lists.each do |list|
        list.cards.each do |card|
            json.set! card.id do
                json.extract! card, :id, :title, :description, :due_date, :list_id, :prev_id, :next_id
                # json.commentIds do
                #     json.array! card.comments, :id
                # end
            end
        end
    end
end