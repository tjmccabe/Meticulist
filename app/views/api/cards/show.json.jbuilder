json.extract! @card, :id, :title, :description, :due_date, :list_id
json.commentIds do
    json.array! @card.comments, :id
end