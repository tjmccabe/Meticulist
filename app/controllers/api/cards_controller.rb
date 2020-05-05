class Api::CardsController < ApplicationController
    def create
        @card = Card.new(card_params)

        if @card.save
            render :show
        else
            render json: @card.errors.full_messages, status: 422
        end
    end

    def update
        @card = Card.find_by(id: params[:id])

        if !@card
            render json: ["card not found"], status: 404
        elsif @card.update(card_params)
            render :show
        else
            render json: @card.errors.full_messages
        end
    end

    def destroy
        @card = Card.find_by(id: params[:id])

        if !@card
            render json: ["card not found"], status: 404
        elsif @card.destroy
            render :show
        else
            render json: @card.errors.full_messages, status: 422
        end
    end

    private
    def card_params
        params.require(:card).permit(:list_id, :title, :description, :due_date)
    end
end
