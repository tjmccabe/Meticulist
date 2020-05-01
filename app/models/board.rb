# == Schema Information
#
# Table name: boards
#
#  id          :bigint           not null, primary key
#  admin_id    :integer          not null
#  title       :string           not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Board < ApplicationRecord
    validates :admin_id, :title, presence: true

    belongs_to :admin,
        foreign_key: :admin_id,
        class_name: :User

    has_one_attached :background_photo
end
