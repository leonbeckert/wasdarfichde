import {
  SET_CONTENT_DATA_API,
  SET_CONTENT_DATA_QANDA,
  ADD_NEW_QANDA,
  ADD_NEW_QUESTION,
  ADD_NEW_ANSWER,
  EDIT_QANDA,
  SET_ERRORS,
  CLEAR_ERRORS,
  SET_SEARCH_TERMS,
  SET_TWW_API_DATA,
  SET_RKI_API_DATA,
  SET_OPEN_CITY_ADD_THANK_YOU,
  SET_OPEN_CITY_ADD,
} from "../types";
import axios from "axios";

export const setContentDataQAndA = (contentData) => (dispatch) => {
  dispatch({
    type: SET_CONTENT_DATA_QANDA,
    payload: {
      contentData,
    },
  });
};
export const setContentDataApi = (contentData) => (dispatch) => {
  dispatch({
    type: SET_CONTENT_DATA_API,
    payload: {
      contentData,
    },
  });
};

export const setTWWapiData = (twwapidata) => (dispatch) => {
  dispatch({
    type: SET_TWW_API_DATA,
    payload: {
      twwapidata,
    },
  });
};
export const setRKIapiData = (rkiapidata) => (dispatch) => {
  dispatch({
    type: SET_RKI_API_DATA,
    payload: {
      rkiapidata,
    },
  });
};

export const addQAndAToContent = (newQAndA) => (dispatch) => {
  dispatch({
    type: ADD_NEW_QANDA,
    payload: {
      newQAndA,
    },
  });
};
export const addQuestion = (question) => (dispatch) => {
  dispatch({
    type: ADD_NEW_QUESTION,
    payload: {
      question,
    },
  });
};
export const addAnswer = (answer) => (dispatch) => {
  dispatch({
    type: ADD_NEW_ANSWER,
    payload: {
      answer,
    },
  });
};

export const editQAndAInContent = (editedQAndA) => (dispatch) => {
  dispatch({
    type: EDIT_QANDA,
    payload: {
      editedQAndA,
    },
  });
};

export const createCity = (newCity) => (dispatch) => {
  axios
    .post("/createcity", newCity)
    .then(() => dispatch(clearErrors()))
    .then(() => dispatch(toggleOpenCityAdd(false)))
    .then(() => dispatch(toggleOpenThankYouCityAdd(true)))
    .catch((err) => {
      console.log(err);
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

// Get all searchterms
export const getSearchTerms = () => (dispatch) => {
  axios
    .get("/getallsearchterms")
    .then((res) =>
      dispatch({
        type: SET_SEARCH_TERMS,
        payload: res.data,
      })
    )
    .catch((err) => {
      console.log(err);
      dispatch({
        type: SET_SEARCH_TERMS,
        payload: [],
      });
    });
};

// Clear errors
export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS, payload: {} });
};

export const toggleOpenThankYouCityAdd = (bool) => (dispatch) => {
  dispatch({
    type: SET_OPEN_CITY_ADD_THANK_YOU,
    payload: {
      bool,
    },
  });
};

export const toggleOpenCityAdd = (bool) => (dispatch) => {
  dispatch({
    type: SET_OPEN_CITY_ADD,
    payload: {
      bool,
    },
  });
};
