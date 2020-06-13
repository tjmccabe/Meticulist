# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  author_id  :integer          not null
#  card_id    :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Comment < ApplicationRecord
  validates :author_id, :card_id, :body, presence: true

  belongs_to :card,
    foreign_key: :card_id,
    class_name: :Card
  
  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User
end
