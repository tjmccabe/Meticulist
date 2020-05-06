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
#
class List < ApplicationRecord
    validates :board_id, :title, presence: true

    belongs_to :board,
        foreign_key: :board_id,
        class_name: :Board

    has_many :cards, dependent: :destroy,
        foreign_key: :list_id,
        class_name: :Card
end
