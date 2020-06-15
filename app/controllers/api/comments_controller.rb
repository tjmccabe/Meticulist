class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render :show
    else
      render json @comment.errors.full_messages, status: 422
    end
  end

  def update
    @comment = Comment.find_by(id: params[:id])

    if !@comment
      render json: ["Comment not found"], status: 404
    elsif @comment.author_id != current_user.id
      render json: ["Comment may only be edited by author"], status: 403
    else 
      if @comment.update(comment_params)
        render :show
      else
        render json: @comment.errors.full_messages, status: 422
      end
    end
  end

  def destroy
    @comment = Comment.find_by(id: params[:id])

    if !@comment
      render json: ["Comment not found"], status: 404
    elsif @comment.author_id != current_user.id
      render json: ["Comment may only be deleted by author"], status: 403
    else
      if @comment.destroy
        render :show
      else
        render json: @comment.errors.full_messages, status: 422
      end
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:author_id, :card_id, :body)
  end
end
