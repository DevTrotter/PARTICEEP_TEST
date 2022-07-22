import { movies$ } from "../../../data/movies";

export const getMovies = () => async (dispatch) => {
  dispatch({
    type: FETCH_MOVIES_BEGIN,
  });
  try {
    const res = await movies$;
    const bestMovies = res.sort((a, b) => {
      return b.likes - a.likes;
    });
    const movies = res;
    dispatch({
      type: GET_MOVIES_SUCCESS,
      payload: {
        movies,
        bestMovies,
      },
    });
    return res;
  } catch (err) {
    dispatch({
      type: FETCH_MOVIES_FAIL,
      payload: err.response.data.error,
    });
  }
};

export const deleteMovie = (idMovie, allMovies) => async (dispatch) => {
  const newAllMovies = allMovies.filter((movie) => movie.id !== idMovie);

  dispatch({
    type: DELETE_MOVIE_FINISH,
    payload: newAllMovies,
  });
};

export const sortFetch = (filters, allMovies) => async () => {
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
  let allMovies = await dispatch(getMovies());
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

export const FETCH_MOVIES_BEGIN = "FETCH_MOVIES_BEGIN";
export const GET_MOVIES_SUCCESS = "GET_MOVIES_SUCCESS";
export const FETCH_MOVIES_FAIL = "FETCH_MOVIES_FAIL";
export const DELETE_MOVIE_FINISH = "DELETE_MOVIE_FINISH";
export const FILTERS_CHANGE = "FILTERS_CHANGE";
export const FETCH_LIST_MOVIE_BEGIN = "FETCH_LIST_MOVIE_BEGIN";
export const GET_LIST_MOVIE_SUCCESS = "GET_LIST_MOVIE_SUCCESS";
export const FETCH_LIST_MOVIE_FAIL = "FETCH_LIST_MOVIE_FAIL";
