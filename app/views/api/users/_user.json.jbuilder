json.extract! user, :id, :email, :username
json.adminedBoardIds do
    json.array! @user.admined_boards, :id
end

# json.memberIds do
#     json.array! user.boards, :id
# end

# json.authoredCommentIds do
#     json.array! user.comments, :id
# end