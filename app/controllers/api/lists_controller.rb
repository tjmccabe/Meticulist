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
        else
            if params[:list][:title] || params[:list][:board_id]
                if @list.update(list_params)
                    render :show
                else
                    render json: @list.errors.full_messages, status: 422
                end
            else
                if @list.update({card_order: params[:list][:card_order].to_json})
                    render :show
                else
                    render json: @list.errors.full_messages, status: 422
                end
            end
        end
    end

    def destroy
        @list = List.find_by(id: params[:id])

        if !@list
            render json: ["List not found"], status: 404
        else
            if @list.destroy
                render :show
            else
                render json: @list.errors.full_messages, status: 422
            end
        end
    end

    private
    def list_params
        params.require(:list).permit(:board_id, :title, :card_order)
    end
end
