# == Schema Information
#
# Table name: cards
#
#  id          :bigint           not null, primary key
#  list_id     :integer          not null
#  title       :string           not null
#  description :string           default("")
#  due_date    :datetime
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require 'test_helper'

class CardTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
