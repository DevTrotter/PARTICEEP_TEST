import {
    FETCH_POPULAR_MOVIE_BEGIN,
    GET_POPULAR_MOVIE_SUCCESS,
    FETCH_POPULAR_MOVIE_FAIL,
} from '../../action/movieAction/movieAction'

const initialState = {
    allMovies: [],
    mostPopular: [],
    loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_POPULAR_MOVIE_SUCCESS:
            return {
                ...state,
                loading: false,
                allMovies: action.payload,
                mostPopular: action.payload
            }
        case FETCH_POPULAR_MOVIE_BEGIN:
            return {
                ...state,
                loading: true,
                error: ''
            }
        case FETCH_POPULAR_MOVIE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}