json.extract! @list, :id, :title, :board_id
json.cardIds do
    json.array! @list.cards, :id
end