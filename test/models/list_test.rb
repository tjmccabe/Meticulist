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
require 'test_helper'

class ListTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
