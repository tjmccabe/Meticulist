class Api::BoardsController < ApplicationController
    def show
        @board = Board.find(params[:id])
        render :show
    end
end
