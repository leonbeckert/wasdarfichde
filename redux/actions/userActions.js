import {
  SET_USER_DATA,
  SET_AUTHENTICATED,
  SET_OPEN_FEEDBACK_THANK_YOU,
  SET_ANSWER_UPVOTED,
  DELETE_ANSWER_UPVOTED,
  SET_ANSWER_DOWNVOTED,
  DELETE_ANSWER_DOWNVOTED,
  INCREMENT_ANSWER_LIKE_COUNT,
  DECREMENT_ANSWER_LIKE_COUNT,
} from "../types";

export const setUserData = (uid) => (dispatch) => {
  dispatch({
    type: SET_USER_DATA,
    payload: {
      uid,
    },
  });
};

export const loginUser = () => (dispatch) => {
  //dispatch({ type: LOADING_UI });
  console.log("Firing loginUser from userActions");
  dispatch({ type: SET_AUTHENTICATED });
};

export const setOpenThankYouFeedback = (bool) => (dispatch) => {
  dispatch({
    type: SET_OPEN_FEEDBACK_THANK_YOU,
    payload: {
      bool,
    },
  });
};

export const setAnswerUpvoted = (answerId) => (dispatch) => {
  dispatch({
    type: SET_ANSWER_UPVOTED,
    payload: {
      answerId,
    },
  });

  dispatch({
    type: INCREMENT_ANSWER_LIKE_COUNT,
    payload: {
      answerId,
    },
  });
};

export const setAnswerDownvoted = (answerId) => (dispatch) => {
  dispatch({
    type: SET_ANSWER_DOWNVOTED,
    payload: {
      answerId,
    },
  });

  dispatch({
    type: DECREMENT_ANSWER_LIKE_COUNT,
    payload: {
      answerId,
    },
  });
};
export const deleteAnswerUpvoted = (answerId) => (dispatch) => {
  dispatch({
    type: DELETE_ANSWER_UPVOTED,
    payload: {
      answerId,
    },
  });
  dispatch({
    type: DECREMENT_ANSWER_LIKE_COUNT,
    payload: {
      answerId,
    },
  });
};
export const deleteAnswerDownvoted = (answerId) => (dispatch) => {
  dispatch({
    type: DELETE_ANSWER_DOWNVOTED,
    payload: {
      answerId,
    },
  });
  dispatch({
    type: INCREMENT_ANSWER_LIKE_COUNT,
    payload: {
      answerId,
    },
  });
};
