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
#
require 'test_helper'

class BoardTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
