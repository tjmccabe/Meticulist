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

    validates :email, presence: true
    validate :check_email
    validates :username, :password_digest, :session_token, presence: true
    validates :password, length: {
        minimum: 8,
        allow_nil: true,
        message: "must be at least 8 characters."
    }
    validates :username, :email, :session_token, uniqueness: {
        message: "already in use by another account."
    }
    
    before_validation :ensure_session_token

    has_many :admined_boards,
        foreign_key: :admin_id,
        class_name: :Board

    def check_email
        unless /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i.match?(self.email)
            errors[:base] << "That doesn't look like an email address..."
        end
    end

    def self.find_by_credentials(email, pw)
        user = User.find_by(email: email)
        return nil if user.nil?
        user.is_password?(pw) ? user : nil
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_session_token!
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
