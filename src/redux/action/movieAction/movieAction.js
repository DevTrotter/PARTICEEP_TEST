import { fetchApi } from '../../../utils/fetchApi'

export const getMoviePopular = () => async dispatch => {
    dispatch({
        type: FETCH_POPULAR_MOVIE_BEGIN
    })
    try {
        const res = await fetchApi({
            method: 'GET',
            url: `popular?api_key=8be38117fb0fafa10c3ed86f8f216265&language=fr-FR&page=1`
        })
        const movies = res.data
        dispatch({
            type: GET_POPULAR_MOVIE_SUCCESS,
            payload: movies.results
        })
    } catch(err) {
        dispatch({
            type: FETCH_POPULAR_MOVIE_FAIL,
            payload: err.response.data.error
        })
    }
}

export const FETCH_POPULAR_MOVIE_BEGIN = 'FETCH_POPULAR_MOVIE_BEGIN'
export const GET_POPULAR_MOVIE_SUCCESS = 'GET_POPULAR_MOVIE_SUCCESS'
export const FETCH_POPULAR_MOVIE_FAIL = 'FETCH_POPULAR_MOVIE_FAIL'