class Api::BoardsController < ApplicationController

    def index
        @boards = Board.find_by(admin_id: current_user.id)
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
        
        if @board.update(board_params)
            render :show
        else
            render json: @board.errors.full_messages, status: 422
        end
    end

    def destroy
        @board = Board.find(params[:id])

        if @board
            @board.destroy
            render :show
        else
            render json: ["That board does not exist"], status: 404
        end
    end

    private

    def board_params
        params.require(:board).permit(:admin_id, :title, :description, :background_photo)
    end
end
