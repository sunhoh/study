import {
  FETCH_COMMENTS,
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
} from './types';

const fetchCommentsSuccess = comments => {
  return {
    type: FETCH_COMMENTS_SUCCESS,
    payload: comments,
  };
};
const fetchCommentsFailure = error => {
  return {
    type: FETCH_COMMENTS_FAILURE,
    payload: error,
  };
};

const fetchCommentsRequest = () => {
  return {
    type: FETCH_COMMENTS_REQUEST,
  };
};

export const fetchComments = () => {
  return dispatch => {
    dispatch(fetchCommentsRequest());
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then(comments => dispatch(fetchCommentsSuccess(comments)))
      .catch(error => dispatch(fetchCommentsFailure(error)));
  };
};
