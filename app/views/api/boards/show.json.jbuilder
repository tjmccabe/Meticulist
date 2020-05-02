json.board do
    json.extract! @board,
            :id,
            :title,
            :admin_id,
            :bgp_big_url,
            :bgp_small_url,
            :bgp_alt_text
    # json.listIds do
    #     json.array! @board.lists, :id
    # end
    # json.memberIds do
    #     json.array! @board.members, :id
    # end
end

# json.lists do
#     @board.lists.each do |list|
#         json.set! list.id do
#             json.extract! list, :id, :title, :board_id
#             json.cardIds do
#                 json.array! list.cards, :id
#             end
#         end
#     end
# end

# json.cards do
#     @board.lists.each do |list|
#         list.cards.each do |card|
#             json.set! card.id do
#                 json.extract! card, :id, :title, :description, :due_date, :list_id
#                 json.commentIds do
#                     json.array! card.comments, :id
#                 end
#             end
#         end
#     end
# end