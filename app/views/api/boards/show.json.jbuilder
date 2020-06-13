json.board do
    json.partial! 'board', board: @board
    json.listOrder JSON.parse(@board.list_order)
end

json.lists do
    @board.lists.each do |list|
        json.set! list.id do
            json.partial! '/api/lists/list', list: list
        end
    end
end

json.cards do
    @board.lists.each do |list|
        list.cards.each do |card|
            json.set! card.id do
                json.partial! '/api/cards/card', card: card
            end
        end
    end
end

json.comments do
    @board.lists.each do |list|
        list.cards.each do |card|
            card.comments.each do |comment|
                json.set! comment.id do
                    json.partial! '/api/comments/comment', comment: comment
                end
            end
        end
    end
end

# users top-level key for members?