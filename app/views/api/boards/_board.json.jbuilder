json.extract! board,
    :id,
    :title,
    :description,
    :admin_id,
    :bgp_big_url,
    :bgp_small_url,
    :bgp_alt_text
json.admin do
    json.extract! board.admin, :id, :username, :email
end
json.listOrder JSON.parse(board.list_order)
# json.listIds board.list_ids
# json.memberIds do
#     json.array! board.members, :id
# end