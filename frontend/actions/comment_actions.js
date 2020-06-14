import * as CommentAPI from "../util/comment_api_util";

export const RECEIVE_NEW_COMMENT = "RECEIVE_NEW_COMMENT";
export const RECEIVE_UPDATED_COMMENT = "RECEIVE_UPDATED_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';

const receiveNewComment = (comment) => ({
  type: RECEIVE_NEW_COMMENT,
  comment
})

const receiveUpdatedComment = (comment) => ({
  type: RECEIVE_UPDATED_COMMENT,
  comment
})

const removeComment = (comment) => ({
  type: REMOVE_COMMENT,
  comment
})

export const receiveCommentErrors = (errors) => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors
})

export const createComment = comment => dispatch => {
  CommentAPI.createComment(comment)
    .then(comment => dispatch(receiveNewComment(comment)))
    .fail(errors => receiveCommentErrors(errors.responseJSON))
}

export const updateComment = comment => dispatch => {
  CommentAPI.updateComment(comment)
    .then(comment => dispatch(receiveUpdatedComment(comment)))
    .fail(errors => receiveCommentErrors(errors.responseJSON))
}

export const deleteComment = comment => dispatch => {
  CommentAPI.deleteComment(comment)
    .then(comment => dispatch(removeComment(comment)))
    .fail(errors => receiveCommentErrors(errors.responseJSON))
}