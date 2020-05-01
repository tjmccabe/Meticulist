json.boards do
    @boards.each do |board|
        json.set! board.id do
            json.extract! board, :id, :title
            json.backgroundPhotoUrl url_for(board.background_photo)
        end
    end
end