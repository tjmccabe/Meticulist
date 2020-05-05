class Api::ListsController < ApplicationController
    def create
        @list = List.new(list_params)

        if @list.save
            render :show
        else
            render json: @list.errors.full_messages, status: 422
        end
    end

    def update
        @list = List.find_by(id: params[:id])

        if !@list
            render json: ["List not found"], status: 404
        elsif @list.update(list_params)
            render :show
        else
            render json: @list.errors.full_messages
        end
    end

    def destroy
        @list = List.find_by(id: params[:id])

        if !@list
            render json: ["List not found"], status: 404
        elsif @list.destroy
            render :show
        else
            render json: @list.errors.full_messages, status: 422
        end
    end

    private
    def list_params
        params.require(:list).permit(:board_id, :title)
    end
end
