import { GET_ARTICLE, GET_ARTICLES, ARTICLE_LOADING } from "../actions/types";

const initialState = {
  article: null,
  articles: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ARTICLE_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_ARTICLE:
      return {
        ...state,
        article: action.payload,
        loading: false
      };
    case GET_ARTICLES:
      return {
        ...state,
        articles: action.payload,
        loading: false
      };

    default:
      return state;
  }
}
