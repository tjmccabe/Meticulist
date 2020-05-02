@boards.each do |board|
    json.set! board.id do
        json.extract! board,
            :id,
            :title,
            :admin_id,
            :bgp_big_url,
            :bgp_small_url,
            :bgp_alt_text
    end
end