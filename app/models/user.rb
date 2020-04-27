# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    attr_reader :password

    validates :username, :email, :password_digest, :session_token, presence: true
    validates :username, :session_token, :email, uniqueness: true
    validates :password, length: {minimum: 6, allow_nil: true}
    before_validation :ensure_session_token

    def self.find_by_credentials(un, pw)
        user = User.find_by(username: un)
        user ||= User.find_by(email: un)
        return nil if user.nil?
        user.is_password?(pw) ? user : nil
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_session_token
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end

    def is_password?(pw)
        BCrypt::Password.new(self.password_digest).is_password?(pw)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end
end
