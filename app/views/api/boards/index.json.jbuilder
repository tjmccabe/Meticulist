@boards.each do |board|
    json.set! board.id do
        json.extract! board, :id, :title, :admin_id
        json.backgroundPhotoUrl board.background_photo.attached? ? url_for(board.background_photo) : nil
    end
end