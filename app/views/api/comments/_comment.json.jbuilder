json.extract! comment, :id, :card_id, :author_id, :body
json.authorName User.find_by(id: comment.author_id).username