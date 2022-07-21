import { movies$ } from "../../../data/movies";
import { fetchApi } from "../../../utils/fetchApi";

export const getMoviePopular = () => async (dispatch) => {
  dispatch({
    type: FETCH_POPULAR_MOVIE_BEGIN,
  });
  try {
    const res = await movies$;
    res.sort((a, b) => {
      return b.likes - a.likes;
    });
    dispatch({
      type: GET_POPULAR_MOVIE_SUCCESS,
      payload: res,
    });
    return res;
  } catch (err) {
    dispatch({
      type: FETCH_POPULAR_MOVIE_FAIL,
      payload: err.response.data.error,
    });
  }
};

export const getListMovie = () => async (dispatch) => {
  dispatch({
    type: FETCH_LIST_MOVIE_BEGIN,
  });
  try {
    const res = await movies$;
    console.log(res);
    dispatch({
      type: GET_LIST_MOVIE_SUCCESS,
      payload: res,
    });
  } catch (err) {
    dispatch({
      type: FETCH_LIST_MOVIE_FAIL,
      payload: err.response.data.error,
    });
  }
};

export const sortFetch = (filters, allMovies) => async (dispatch) => {
  Object.entries(filters).map(([type, value]) => {
    if (type === "genderBy") {
      switch (value) {
        case "Action":
          const idActionMovie = 28;
          allMovies = allMovies.filter((movie) =>
            movie.genre_ids.find((id) => id === idActionMovie)
          );
          break;
        case "Horreur":
          const idHorrorMovie = 27;
          allMovies = allMovies.filter((movie) =>
            movie.genre_ids.find((id) => id === idHorrorMovie)
          );
          break;
        case "Amour":
          const idLoveMovie = 10749;
          allMovies = allMovies.filter((movie) =>
            movie.genre_ids.find((id) => id === idLoveMovie)
          );
          break;
        default:
          return null;
      }
    }
    if (type === "sortBy") {
      if (value === "Ordre alphabétique") {
        allMovies.sort((a, b) =>
          a.original_title < b.original_title ? -1 : 1
        );
      }
    }
  });
  return allMovies;
};

export const switchSort = (value, type, filters) => async (dispatch) => {
  let allMovies = await dispatch(getMoviePopular());
  filters = {
    ...filters,
    [type]: value,
  };
  Object.entries(filters).map(([type, value]) => {
    if (type === "genderBy") {
      switch (value) {
        case "Action":
          const idActionMovie = 28;
          allMovies = allMovies.filter((movie) =>
            movie.genre_ids.find((id) => id === idActionMovie)
          );
          break;
        case "Horreur":
          const idHorrorMovie = 27;
          allMovies = allMovies.filter((movie) =>
            movie.genre_ids.find((id) => id === idHorrorMovie)
          );
          break;
        case "Amour":
          const idLoveMovie = 10749;
          allMovies = allMovies.filter((movie) =>
            movie.genre_ids.find((id) => id === idLoveMovie)
          );
          break;
        default:
          return null;
      }
    }
    if (type === "sortBy") {
      if (value === "Ordre alphabétique") {
        allMovies.sort((a, b) =>
          a.original_title < b.original_title ? -1 : 1
        );
      }
    }
  });
  dispatch({
    type: FILTERS_CHANGE,
    payload: {
      filters,
      array: allMovies,
    },
  });
};

export const FILTERS_CHANGE = "FILTERS_CHANGE";
export const FETCH_LIST_MOVIE_BEGIN = "FETCH_LIST_MOVIE_BEGIN";
export const GET_LIST_MOVIE_SUCCESS = "GET_LIST_MOVIE_SUCCESS";
export const FETCH_LIST_MOVIE_FAIL = "FETCH_LIST_MOVIE_FAIL";
export const FETCH_POPULAR_MOVIE_BEGIN = "FETCH_POPULAR_MOVIE_BEGIN";
export const GET_POPULAR_MOVIE_SUCCESS = "GET_POPULAR_MOVIE_SUCCESS";
export const FETCH_POPULAR_MOVIE_FAIL = "FETCH_POPULAR_MOVIE_FAIL";
