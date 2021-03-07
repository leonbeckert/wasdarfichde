import { LOADING_UI, STOP_LOADING_UI } from "../types";

export const loadingUi = () => (dispatch) => {
  dispatch({
    type: LOADING_UI,
  });
};
export const stopLoadingUi = () => (dispatch) => {
  dispatch({
    type: STOP_LOADING_UI,
  });
};
