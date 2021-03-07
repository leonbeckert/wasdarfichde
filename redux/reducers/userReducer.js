import {
  SET_USER_DATA,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_OPEN_FEEDBACK_THANK_YOU,
  SET_ANSWER_UPVOTED,
  DELETE_ANSWER_UPVOTED,
  SET_ANSWER_DOWNVOTED,
  DELETE_ANSWER_DOWNVOTED,
} from "../types";

const initialState = {
  loading: false,
  credentials: {},
  isSignedIn: false,
  openThankYouFeedback: false,
  openThankYouCityAdd: false,
  upvotedAnswers: [],
  downvotedAnswers: [],
};

export default function Named(state = initialState, action) {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        credentials: {
          id: action.payload.uid,
        },
      };
    case SET_AUTHENTICATED:
      console.log("Setting authenticated");
      return {
        ...state,
        loading: false,
        isSignedIn: true,
      };
    case SET_UNAUTHENTICATED:
      return {
        ...state,
        loading: false,
        isSignedIn: false,
      };
    case SET_OPEN_FEEDBACK_THANK_YOU:
      return {
        ...state,
        openThankYouFeedback: action.payload.bool,
      };

    case SET_ANSWER_UPVOTED:
      return {
        ...state,
        upvotedAnswers: [...state.upvotedAnswers, action.payload.answerId],
      };
    case DELETE_ANSWER_UPVOTED:
      const indexUpvoted = state.upvotedAnswers.indexOf(
        action.payload.answerId
      );
      const newArray1Upvoted = state.upvotedAnswers.slice(0, indexUpvoted);
      const newArray2Upvoted = state.upvotedAnswers.slice(
        indexUpvoted + 1,
        state.upvotedAnswers.length
      );
      const newArrayUpvoted = newArray1Upvoted.concat(newArray2Upvoted);
      return {
        ...state,
        upvotedAnswers: [...newArrayUpvoted],
      };
    case SET_ANSWER_DOWNVOTED:
      return {
        ...state,
        downvotedAnswers: [...state.downvotedAnswers, action.payload.answerId],
      };
    case DELETE_ANSWER_DOWNVOTED:
      const indexDownvoted = state.downvotedAnswers.indexOf(
        action.payload.answerId
      );
      const newArray1Downvoted = state.downvotedAnswers.slice(
        0,
        indexDownvoted
      );
      const newArray2Downvoted = state.downvotedAnswers.slice(
        indexDownvoted + 1,
        state.downvotedAnswers.length
      );
      const newArrayDownvoted = newArray1Downvoted.concat(newArray2Downvoted);
      return {
        ...state,
        downvotedAnswers: [...newArrayDownvoted],
      };

    default:
      return state;
  }
}
