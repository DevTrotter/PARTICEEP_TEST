import { movies$ } from "../../../data/movies";

export const getMovies = () => async (dispatch) => {
  dispatch({
    type: FETCH_MOVIES_BEGIN,
  });
  try {
    const res = await movies$;
    const movies = res;
    const bestMovies = res.sort((a, b) => {
      return b.likes - a.likes;
    });

    const category = [...new Set(res.map((movie) => movie.category))];

    dispatch({
      type: GET_MOVIES_SUCCESS,
      payload: {
        movies,
        bestMovies,
        category,
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

export const likeMovie = (idMovie, type) => async (dispatch, getState) => {
  const { liked, allMovies } = getState().movies;
  let movieLiked = allMovies.filter((movie) => movie.id === idMovie)[0];
  let newLikedMovies = [];

  if (!liked.find((movie) => movie.id === idMovie)) {
    if (type === "liked") {
      movieLiked = {
        ...movieLiked,
        type: type,
        likes: movieLiked.likes + 1,
      };
    }
    if (type === "disliked") {
      movieLiked = {
        ...movieLiked,
        type: type,
        dislikes: movieLiked.dislikes + 1,
      };
    }
    newLikedMovies = [...liked, movieLiked];
  } else {
    if (type === "liked") {
      movieLiked = {
        ...movieLiked,
        type: type,
        likes: movieLiked.likes + 1,
        dislikes: movieLiked.dislikes - 1,
      };
    }
    if (type === "disliked") {
      movieLiked = {
        ...movieLiked,
        type: type,
        dislikes: movieLiked.dislikes + 1,
        likes: movieLiked.likes - 1,
      };
    }
    newLikedMovies = liked.map((movie) => {
      if (movie.id === movieLiked.id) {
        return (movie = movieLiked);
      }
      return movie;
    });
  }

  const newAllMovies = allMovies.map((movie) => {
    if (movie.id === movieLiked.id) {
      return (movie = movieLiked);
    }
    return movie;
  });

  dispatch({
    type: LIKE_MOVIE_SUCESS,
    payload: {
      newAllMovies,
      newLikedMovies,
    },
  });
};

export const getFilterListMovie = (category) => async (dispatch, getState) => {
  const allMovies = await movies$;
  const newAllMovies =
    category !== "Tous"
      ? allMovies.filter((movie) => movie.category === category)
      : allMovies;

  dispatch({
    type: FILTER_MOVIE_SUCESS,
    payload: {
      category,
      newAllMovies,
    },
  });
};

export const FETCH_MOVIES_BEGIN = "FETCH_MOVIES_BEGIN";
export const GET_MOVIES_SUCCESS = "GET_MOVIES_SUCCESS";
export const FETCH_MOVIES_FAIL = "FETCH_MOVIES_FAIL";
export const DELETE_MOVIE_SUCCESS = "DELETE_MOVIE_SUCCESS";
export const LIKE_MOVIE_SUCESS = "LIKE_MOVIE_SUCESS";
export const FILTER_MOVIE_SUCESS = "FILTER_MOVIE_SUCESS";
