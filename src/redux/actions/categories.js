import { getAllCategories } from "../../services/categories";
import {
  GET_ALL_CATEGORIES,
  SET_CATEGORIES_LOADER,
} from "../actionTypes/categories";

// Action creator returning a function (thunk)
// export const fetchAllCategories = () => (dispatch) => {
  export const fetchAllCategories = ({dispatch}) => {

  dispatch({
    type: SET_CATEGORIES_LOADER,
    payload: true,
  });

  getAllCategories().then(({ data }) => {
      dispatch({
        type: SET_CATEGORIES_LOADER,
        payload: false,
      });
      dispatch({
        type: GET_ALL_CATEGORIES,
        payload: data,
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: SET_CATEGORIES_LOADER,
        payload: false,
      });
      dispatch({
        type: GET_ALL_CATEGORIES,
        payload: [],
      });
    });
};
