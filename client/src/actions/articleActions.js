import axios from "axios";
import {
  GET_ARTICLE,
  GET_ARTICLES,
  ARTICLE_LOADING,
  ARTICLE_NOT_FOUND,
  CLEAR_CURRENT_ARTICLE,
  GET_ERRORS
} from "./types";

//Article loading
export const setArticleLoading = () => {
  return {
    type: ARTICLE_LOADING
  };
};

//Get All articles
export const getArticles = () => dispatch => {
  dispatch(setArticleLoading());
  axios
    // .get("/api/profile/all?limit=1&offset=0") for query limitation
    .get("/api/articles")
    .then(res =>
      dispatch({
        type: GET_ARTICLES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ARTICLES,
        payload: null
      })
    );
};

//get article by article_id
export const getArticleByArticleId = id => dispatch => {
  dispatch(setArticleLoading());
  axios
    .get(`/api/articles/${id}`)
    .then(res =>
      dispatch({
        type: GET_ARTICLE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: null
      })
    );
};
