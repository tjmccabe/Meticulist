# == Schema Information
#
# Table name: boards
#
#  id            :bigint           not null, primary key
#  admin_id      :integer          not null
#  title         :string           not null
#  description   :text
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  bgp_big_url   :text
#  bgp_small_url :text
#  bgp_alt_text  :text
#  list_order    :text             default("[]"), not null
#
class Board < ApplicationRecord
    validates :admin_id, :title, :list_order, presence: true
    after_initialize :ensure_ordering

    belongs_to :admin,
        foreign_key: :admin_id,
        class_name: :User

    has_many :lists, dependent: :destroy,
        foreign_key: :board_id,
        class_name: :List

    has_many :cards,
        through: :lists

    has_many :comments,
        through: :cards

    has_many :authors,
        through: :comments

    def ensure_ordering
        self.list_order ||= "[]"
    end
end
