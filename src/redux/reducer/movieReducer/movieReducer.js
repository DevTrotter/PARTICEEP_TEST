import {
  FETCH_MOVIES_BEGIN,
  GET_MOVIES_SUCCESS,
  FETCH_MOVIES_FAIL,
  DELETE_MOVIE_SUCCESS,
  LIKE_MOVIE_SUCESS,
  FILTER_MOVIE_SUCESS,
} from "../../action/movieAction/movieAction";

const initialState = {
  allMovies: [],
  filters: {
    genderBy: "Tous",
    sortBy: "None",
  },
  genderArray: [],
  liked: [],
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
        genderArray: action.payload.category,
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
    case DELETE_MOVIE_SUCCESS:
      return {
        ...state,
        allMovies: action.payload,
      };
    case LIKE_MOVIE_SUCESS:
      return {
        ...state,
        allMovies: action.payload.newAllMovies,
        liked: action.payload.newLikedMovies,
      };
    case FILTER_MOVIE_SUCESS:
      return {
        ...state,
        filters: { ...state.filters, genderBy: action.payload.category },
        allMovies: action.payload.newAllMovies,
      };
    default:
      return state;
  }
};
