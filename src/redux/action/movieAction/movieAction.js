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

export const deleteMovie = (idMovie) => async (dispatch, getState) => {
  const { allMovies } = getState().movies;
  const newAllMovies = allMovies.filter((movie) => movie.id !== idMovie);

  dispatch({
    type: DELETE_MOVIE_SUCCESS,
    payload: newAllMovies,
  });
};

export const likeMovie = (movie, type) => async (dispatch, getState) => {
  const { liked } = getState().movies;
  movie = { ...movie, type: type };
  liked.push(movie);
  dispatch({
    type: LIKE_MOVIE_SUCESS,
    payload: liked,
  });
};

export const FETCH_MOVIES_BEGIN = "FETCH_MOVIES_BEGIN";
export const GET_MOVIES_SUCCESS = "GET_MOVIES_SUCCESS";
export const FETCH_MOVIES_FAIL = "FETCH_MOVIES_FAIL";
export const DELETE_MOVIE_SUCCESS = "DELETE_MOVIE_SUCCESS";
export const LIKE_MOVIE_SUCESS = "LIKE_MOVIE_SUCESS";
