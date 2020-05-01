class ApplicationController < ActionController::Base
    helper_method :logged_in?, :current_user

    def current_user
        return nil unless session[:session_token]
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def logged_in?
        !!current_user
    end
    
    def login!(user)
        session[:session_token] = user.reset_session_token!
        @current_user = user
    end

    def logout!
        current_user.reset_session_token! if current_user
        session[:session_token] = nil
        @current_user = nil
    end

    def require_logged_in
        if !logged_in?
            render json: ["You must be logged in to see that content"], status: 401
        end
    end
end
