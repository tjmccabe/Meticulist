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
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
    devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :validatable, :omniauthable, :omniauth_providers => %i[facebook]

    def self.new_with_session(params, session)
        super.tap do |user|
          if data = session["devise.facebook_data"] && session["devise.facebook_data"]["extra"]["raw_info"]
              user.email = data["email"] if user.email.blank?
          end
        end
    end

    def self.from_omniauth(auth)
        where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
        user.email = auth.info.email
        user.password = Devise.friendly_token[0, 20]
        user.pass_digest = BCrypt::Password.create(user.password)
        user.name = auth.info.name   # assuming the user model has a name
        user.image = auth.info.image # assuming the user model has an image
        user.username = auth.info.email
        # If you are using confirmable and the provider(s) you use validate emails, 
        # uncomment the line below to skip the confirmation emails.
        # user.skip_confirmation!
        end
    end

    attr_reader :password

    validates :email, presence: true
    validate :check_email
    validates :username, :password_digest, :session_token, presence: true
    validates :username, length: {minimum: 2, message: "must be at least 2 characters."}
    validates :password, length: {
        minimum: 6,
        allow_nil: true,
        message: "must be at least 6 characters."
    }
    
    validates :username, :email, :session_token, uniqueness: {
        message: "already in use by another account."
    }
    
    before_validation :ensure_session_token

    has_many :admined_boards, dependent: :destroy,
        foreign_key: :admin_id,
        class_name: :Board

    has_many :comments, dependent: :destroy,
        foreign_key: :author_id,
        class_name: :Comment

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
