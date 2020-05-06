class Api::CardsController < ApplicationController
    def create
        @card = Card.new(card_params)

        @cards = get_cards(@card)

        if @card.save
            @card.quint_update(@cards[-1]) if @cards[-1]
            @cards = get_cards(@card)
            render :index
        else
            render json: @card.errors.full_messages, status: 422
        end
    end

    def update
        @card = Card.find_by(id: params[:id])

        if !@card
            render json: ["Card not found"], status: 404
        else
            if card_params[:prev_id] || card_params[:next_id]
                @card.quint_update(card_params[:prev_id], card_params[:next_id])
            else
                @card.update(card_params)
            end
            @cards = get_cards(@card)
            render :index
        end
    end

    def destroy
        @card = Card.find_by(id: params[:id])

        if !@card
            render json: ["Card not found"], status: 404
        else
            @card.connect_remaining
            @cards = get_cards(@card)
            render :index
        end
    end

    private
    def card_params
        params.require(:card).permit(:list_id, :title, :description, :due_date)
    end

    def get_cards(card)
        Card.where(list_id: card.list_id)
    end
end
