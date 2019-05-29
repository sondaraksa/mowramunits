import axios from "axios";
import {
  GET_ARTICLE,
  GET_ARTICLES,
  GET_TOTAL_ARTICLE_COUNT,
  ARTICLE_LOADING,
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

//Get TOTAL ARTICLE COUNT
export const getTotalArticleCount = () => dispatch => {
  dispatch(setArticleLoading());
  axios
    .get("/api/totalarticlecount")
    .then(res =>
      dispatch({
        type: GET_TOTAL_ARTICLE_COUNT,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_TOTAL_ARTICLE_COUNT,
        payload: null
      })
    );
};

//Get All articles with limit and offset
export const getArticlesLimitOffset = (limit, offset) => dispatch => {
  dispatch(setArticleLoading());
  axios
    // .get("/api/profile/all?limit=1&offset=0") for query limitation
    .get(`/api/articles?limit=${limit}&offset=${offset}`)
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

//Create Article
export const createArticle = (formData, config, history) => dispatch => {
  axios
    .post("/api/articles", formData, config)
    .then(res => history.push("/articles"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
