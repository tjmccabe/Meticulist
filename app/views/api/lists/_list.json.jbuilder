json.extract! list, :id, :title, :board_id
json.cardOrder JSON.parse(list.card_order)
# json.cardIds list.card_ids