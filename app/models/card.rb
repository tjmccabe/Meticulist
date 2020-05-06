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
end
