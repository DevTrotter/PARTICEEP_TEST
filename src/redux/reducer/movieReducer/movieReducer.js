import {
  FETCH_MOVIES_BEGIN,
  GET_MOVIES_SUCCESS,
  FETCH_MOVIES_FAIL,
  DELETE_MOVIE_FINISH,
  FETCH_LIST_MOVIE_BEGIN,
  GET_LIST_MOVIE_SUCCESS,
  FETCH_LIST_MOVIE_FAIL,
  FILTERS_CHANGE,
} from "../../action/movieAction/movieAction";

const initialState = {
  allMovies: [],
  filters: {
    genderBy: "Tous",
    sortBy: "None",
  },
  mostPopular: [],
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        mostPopular: action.payload.bestMovies,
        allMovies: action.payload.movies,
      };
    case FETCH_MOVIES_BEGIN:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case FETCH_MOVIES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_MOVIE_FINISH:
      return {
        ...state,
        allMovies: action.payload,
      };
    case FETCH_LIST_MOVIE_BEGIN:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case GET_LIST_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        allMovies: action.payload,
      };
    case FETCH_LIST_MOVIE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FILTERS_CHANGE:
      return {
        ...state,
        filters: action.payload.filters,
        allMovies: action.payload.array,
      };
    default:
      return state;
  }
};
