import {
  FETCH_MOVIES_BEGIN,
  GET_MOVIES_SUCCESS,
  FETCH_MOVIES_FAIL,
  DELETE_MOVIE_SUCCESS,
  LIKE_MOVIE_SUCCESS,
  FILTER_MOVIE_SUCCESS,
  CHANGE_ELEMENT_PER_PAGE_SUCCESS,
  CHANGE_PAGE,
} from "../../action/movieAction/movieAction";

const initialState = {
  allMovies: [],
  displayMovies: [],
  filter: "Tous",
  pagination: {
    page: 0,
    elementsPerPage: 12,
  },
  genderArray: [],
  liked: [],
  mostPopular: [],
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
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
    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        mostPopular: action.payload.bestMovies,
        genderArray: action.payload.category,
        allMovies: action.payload.displayMovies,
      };
    case DELETE_MOVIE_SUCCESS:
      return {
        ...state,
        allMovies: action.payload.newAllMovies,
        displayMovies: action.payload.newDisplayMovies,
        genderArray: action.payload.category,
      };
    case LIKE_MOVIE_SUCCESS:
      return {
        ...state,
        displayMovies: action.payload.newDisplayMovies,
        liked: action.payload.newLikedMovies,
      };
    case FILTER_MOVIE_SUCCESS:
      return {
        ...state,
        filter: action.payload,
      };
    case CHANGE_ELEMENT_PER_PAGE_SUCCESS:
      return {
        ...state,
        pagination: {
          page: action.payload.initPage,
          elementsPerPage: action.payload.newElementPerPage,
        },
        displayMovies: action.payload.newDisplayMovies,
      };
    case CHANGE_PAGE:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          page: action.payload,
        },
      };
    default:
      return state;
  }
};
