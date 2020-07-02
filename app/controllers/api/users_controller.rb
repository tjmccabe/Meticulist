class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    # def destroy
    #     @user = User.find(id: params[:id])

    #     if @user
    #         if @user.destroy
    #             render :show
    #         else
    #             render json: @user.errors.full_messages, status: 422
    #         end
    #     else
    #         render json: ["User not found"], status: 404
    #     end
    # end
    
    private
    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end
