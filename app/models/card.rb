# == Schema Information
#
# Table name: cards
#
#  id          :bigint           not null, primary key
#  list_id     :integer          not null
#  title       :string           not null
#  description :text
#  due_date    :datetime
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  next_id     :integer
#  prev_id     :integer
#
class Card < ApplicationRecord
    validates :list_id, :title, presence: true

    belongs_to :list,
        foreign_key: :list_id,
        class_name: :List

    has_one_attached :image

    def prev
        Card.find_by(id: self.prev_id)
    end

    def next
        Card.find_by(id: self.next_id)
    end

    def quint_update(new_prev_id = nil, new_next_id = nil)
        temp_prev = self.prev
        temp_next = self.next

        new_prev = Card.find_by(id: new_prev_id)
        new_next = Card.find_by(id: new_next_id)

        self.prev_id = new_prev_id
        self.next_id = new_next_id
        new_prev.next_id = self.id if new_prev
        new_next.prev_id = self.id if new_next

        temp_prev.next_id = nil if !temp_next
        temp_next.prev_id = nil if !temp_prev
        if temp_prev && temp_next
            temp_prev.next_id = temp_next.id
            temp_next.prev_id = temp_prev.id
        end

        Card.transaction do
            temp_prev.save if temp_prev
            temp_next.save if temp_next
            new_prev.save if new_prev
            new_next.save if new_next
            self.save
        end
    end

    def connect_remaining
        temp_prev = self.prev
        temp_next = self.next

        temp_prev.next_id = nil if !temp_next
        temp_next.prev_id = nil if !temp_prev
        if temp_prev && temp_next
            temp_prev.next_id = temp_next.id
            temp_next.prev_id = temp_prev.id
        end

        Card.transaction do
            temp_prev.save if temp_prev
            temp_next.save if temp_next
            self.destroy
        end
    end
end
