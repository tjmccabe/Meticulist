class Api::BoardsController < ApplicationController
    before_action :require_logged_in

    def index
        @boards = Board.where(admin_id: current_user.id)
        # will change to finding by board memberships
        # maybe find 2 tiers based on whether they created the board
        render :index
    end
    
    def create
        @board = Board.new(board_params)
        if @board.save
            render :show
        else
            render json: @board.errors.full_messages, status: 422
        end
    end
    
    def show
        @board = Board.find(params[:id])
        render :show
    end

    def update
        @board = Board.find(params[:id])
        
        if @board.admin_id != current_user.id
            render json: ["Board settings may only be edited by admin"], status: 403
        elsif @board.update(board_params)
            render :show
        else
            render json: @board.errors.full_messages, status: 422
        end
    end

    def destroy
        @board = Board.find(params[:id])

        if @board && @board.admin_id == current_user.id
            @board.destroy
            render :show
        elsif @board
            render json: ["Board may only be deleted by admin"], status: 403
        else
            render json: ["That board does not exist"], status: 404
        end
    end

    private

    def board_params
        params.require(:board).permit(:admin_id, :title, :description, :background_photo)
    end
end
