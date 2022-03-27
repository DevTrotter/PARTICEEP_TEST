import {
    FETCH_POPULAR_MOVIE_BEGIN,
    GET_POPULAR_MOVIE_SUCCESS,
    FETCH_POPULAR_MOVIE_FAIL,
    FETCH_NEXT_MOVIE_BEGIN,
    GET_NEXT_MOVIE_SUCCESS,
    FETCH_NEXT_MOVIE_FAIL,
    FILTERS_CHANGE,
} from '../../action/movieAction/movieAction'

const initialState = {
    allMovies: [],
    filters: {
        "genderBy": "Tous",
        "sortBy": "None"
    },
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
        case FETCH_NEXT_MOVIE_BEGIN:
            return {
                ...state,
                loading: true,
                error: ''
            }
        case GET_NEXT_MOVIE_SUCCESS:
            return {
                ...state,
                loading: false,
                allMovies: action.payload,
            }
        case FETCH_NEXT_MOVIE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case FILTERS_CHANGE:
            return {
                ...state,
                filters: action.payload.filters,
                allMovies: action.payload.array
            }
        default:
            return state;
    }
}