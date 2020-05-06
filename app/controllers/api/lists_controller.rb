class Api::ListsController < ApplicationController
    def create
        @list = List.new(list_params)

        @lists = get_lists(@list)

        if @list.save
            @list.quint_update(@lists[-1]) if @lists[-1]
            @lists = get_lists(@list)
            render :index
        else
            render json: @list.errors.full_messages, status: 422
        end
    end

    def update
        @list = List.find_by(id: params[:id])

        if !@list
            render json: ["List not found"], status: 404
        else
            if list_params[:prev_id] || list_params[:next_id]
                @list.quint_update(list_params[:prev_id], list_params[:next_id])
            else
                @list.update(list_params)
            end
            @lists = get_lists(@list)
            render :index
        end
    end

    def destroy
        @list = List.find_by(id: params[:id])

        if !@list
            render json: ["List not found"], status: 404
        else
            @list.connect_remaining
            @lists = get_lists(@list)
            render :index
        end
    end

    private
    def list_params
        params.require(:list).permit(:board_id, :title, :prev_id, :next_id)
    end

    def get_lists(list)
        List.where(board_id: list.board_id)
    end
end
