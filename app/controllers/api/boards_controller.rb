class Api::BoardsController < ApplicationController
    before_action :require_logged_in

    def index
        @boards = Board.includes(:admin).where(admin_id: current_user.id)
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
        puts "about to pull"
        @board = Board.includes(:admin, :lists, :cards, :comments, :authors).find_by(id: params[:id])
        puts "pulled"
        if @board.nil?
            render json: ["Board not found"], status: 404
        elsif @board.admin_id != current_user.id
            render json: ["Board may only be accessed by admin"], status: 403
            # CHANGE FOR MEMBERS LATER
        else
            render :show
        end
    end

    def update
        @board = Board.find_by(id: params[:id])
        if @board.nil?
            render json: ["Board not found"], status: 404
        elsif params[:board][:title] || params[:board][:description] || params[:board][:bgp_big_url]
            if @board.admin_id != current_user.id
                render json: ["Board settings may only be edited by admin"], status: 403
            elsif @board.update(board_params)
                render :show
            else
                render json: @board.errors.full_messages, status: 422
            end
        # elsif @board.update(board: {list_order: params[:board][:list_order].to_json})
        elsif @board.update(board_params)
            render :show
        else
            render json: @board.errors.full_messages, status: 422
        end
    end

    def destroy
        @board = Board.find_by(id: params[:id])

        if @board && @board.admin_id == current_user.id
            if @board.destroy
                render :show
            else
                render json: @board.errors.full_messages, status: 422
            end
        elsif @board
            render json: ["Board may only be deleted by admin"], status: 403
        else
            render json: ["Board not found"], status: 404
        end
    end

    private

    def board_params
        params.require(:board).permit(
            :admin_id,
            :title,
            :description,
            :bgp_big_url,
            :bgp_small_url,
            :bgp_alt_text,
            :list_order
        )
    end
end
