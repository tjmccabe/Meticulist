json.extract! comment, :id, :card_id, :author_id, :body, :created_at, :updated_at
json.authorName comment.author.username
# json.author do
#     json.extract! comment.author, :id, :username, :email
# end