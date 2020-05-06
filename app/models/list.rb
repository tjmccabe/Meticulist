# == Schema Information
#
# Table name: lists
#
#  id         :bigint           not null, primary key
#  board_id   :integer          not null
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  next_id    :integer
#  prev_id    :integer
#  card_order :text             default("[]"), not null
#
class List < ApplicationRecord
    validates :board_id, :title, :card_order, presence: true
    after_initialize :ensure_ordering
    after_create :stack

    belongs_to :board,
        foreign_key: :board_id,
        class_name: :Board

    has_many :cards, dependent: :destroy,
        foreign_key: :list_id,
        class_name: :Card
    
    def ensure_ordering
        self.card_order ||= "[]"
    end

    def stack
        board = Board.find_by(id: self.board_id)
        board.list_order = JSON.parse(board.list_order).push(self.id).to_json
        board.save
    end



    # ALL OF THE BELOW IS FOR LINKED LIST UPDATING

    # def prev
    #     List.find_by(id: self.prev_id)
    # end

    # def next
    #     List.find_by(id: self.next_id)
    # end

    # def quint_update(new_prev_id = nil, new_next_id = nil)
    #     temp_prev = self.prev
    #     temp_next = self.next

    #     new_prev = List.find_by(id: new_prev_id)
    #     new_next = List.find_by(id: new_next_id)

    #     self.prev_id = new_prev_id
    #     self.next_id = new_next_id
    #     new_prev.next_id = self.id if new_prev
    #     new_next.prev_id = self.id if new_next

    #     temp_prev.next_id = nil if !temp_next
    #     temp_next.prev_id = nil if !temp_prev
    #     if temp_prev && temp_next
    #         temp_prev.next_id = temp_next.id
    #         temp_next.prev_id = temp_prev.id
    #     end

    #     List.transaction do
    #         temp_prev.save if temp_prev
    #         temp_next.save if temp_next
    #         new_prev.save if new_prev
    #         new_next.save if new_next
    #         self.save
    #     end
    # end

    # def connect_remaining
    #     temp_prev = self.prev
    #     temp_next = self.next

    #     temp_prev.next_id = nil if !temp_next
    #     temp_next.prev_id = nil if !temp_prev
    #     if temp_prev && temp_next
    #         temp_prev.next_id = temp_next.id
    #         temp_next.prev_id = temp_prev.id
    #     end

    #     List.transaction do
    #         temp_prev.save if temp_prev
    #         temp_next.save if temp_next
    #         self.destroy
    #     end
    # end
end
