import { movies$ } from "../../../data/movies";

export const getMovies = () => async (dispatch, getState) => {
  dispatch({
    type: FETCH_MOVIES_BEGIN,
  });
  try {
    let res = await movies$;

    let bestMovies = await res.sort((a, b) => {
      return b.likes - a.likes;
    });

    const category = [...new Set(res.map((movie) => movie.category))];
    await dispatch(getFilterListMovie("Tous", res));
    const { displayMovies } = getState().movies;

    dispatch({
      type: GET_MOVIES_SUCCESS,
      payload: {
        bestMovies,
        category,
        displayMovies,
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
  const { displayMovies, allMovies } = getState().movies;
  const newDisplayMovies = displayMovies.filter(
    (movie) => movie.id !== idMovie
  );
  const newAllMovies = allMovies.filter((movie) => movie.id !== idMovie);

  const category = [...new Set(newAllMovies.map((movie) => movie.category))];

  dispatch({
    type: DELETE_MOVIE_SUCCESS,
    payload: {
      newAllMovies,
      newDisplayMovies,
      category,
    },
  });
};

export const likeMovie = (idMovie, type) => async (dispatch, getState) => {
  const { liked, displayMovies } = getState().movies;
  let movieLiked = displayMovies.filter((movie) => movie.id === idMovie)[0];
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

  const newDisplayMovies = displayMovies.map((movie) => {
    if (movie.id === movieLiked.id) {
      return (movie = movieLiked);
    }
    return movie;
  });

  dispatch({
    type: LIKE_MOVIE_SUCCESS,
    payload: {
      newDisplayMovies,
      newLikedMovies,
    },
  });
};

export const getFilterListMovie =
  (category, Arraymovie) => async (dispatch, getState) => {
    const { allMovies, pagination } = getState().movies;
    let newDisplayMovies = [];
    if (!Arraymovie) {
      newDisplayMovies =
        category !== "Tous"
          ? allMovies.filter((movie) => movie.category === category)
          : allMovies;
    }
    if (Arraymovie) {
      newDisplayMovies =
        category !== "Tous"
          ? Arraymovie.filter((movie) => movie.category === category)
          : Arraymovie;
    }

    await dispatch(
      changeElementPerPage(pagination.elementsPerPage, newDisplayMovies)
    );
    dispatch({
      type: FILTER_MOVIE_SUCCESS,
      payload: category,
    });
  };

export const changeElementPerPage =
  (newElementPerPage, DisplayMovies) => async (dispatch) => {
    let count = 1;
    let page = 0;
    const initPage = 0;
    const newDisplayMovies = DisplayMovies.map((movie) => {
      if (count < newElementPerPage) {
        count = count + 1;
        return {
          ...movie,
          page: page,
        };
      }
      if (count === newElementPerPage) {
        count = 1;
        page++;
        return {
          ...movie,
          page: page - 1,
        };
      }
    });

    dispatch({
      type: CHANGE_ELEMENT_PER_PAGE_SUCCESS,
      payload: {
        newElementPerPage,
        newDisplayMovies,
        initPage,
      },
    });
  };

export const changePage = (page) => async (dispatch, getState) => {
  const { displayMovies } = getState().movies;
  const maxPage = displayMovies[displayMovies.length - 1].page;
  var newPage = page;
  if (newPage < 0) {
    newPage = 0;
  }
  if (newPage > maxPage) {
    newPage = maxPage;
  }

  dispatch({
    type: CHANGE_PAGE,
    payload: newPage,
  });
};

export const FETCH_MOVIES_BEGIN = "FETCH_MOVIES_BEGIN";
export const GET_MOVIES_SUCCESS = "GET_MOVIES_SUCCESS";
export const FETCH_MOVIES_FAIL = "FETCH_MOVIES_FAIL";
export const DELETE_MOVIE_SUCCESS = "DELETE_MOVIE_SUCCESS";
export const LIKE_MOVIE_SUCCESS = "LIKE_MOVIE_SUCCESS";
export const FILTER_MOVIE_SUCCESS = "FILTER_MOVIE_SUCCESS";
export const CHANGE_ELEMENT_PER_PAGE_SUCCESS =
  "CHANGE_ELEMENT_PER_PAGE_SUCCESS";
export const CHANGE_PAGE = "CHANGE_PAGE";
