import {
    FETCH_POPULAR_MOVIE_BEGIN,
    GET_POPULAR_MOVIE_SUCCESS,
    FETCH_POPULAR_MOVIE_FAIL,
    FETCH_NEXT_MOVIE_BEGIN,
    GET_NEXT_MOVIE_SUCCESS,
    FETCH_NEXT_MOVIE_FAIL,
    ORDER_CHANGE,
    GENDER_CHANGE,
} from '../../action/movieAction/movieAction'

const initialState = {
    allMovies: [],
    sortBy: {
        order: 'default',
        filter: ''
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
                allMovies: state.allMovies.concat(action.payload),
            }
        case FETCH_NEXT_MOVIE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case ORDER_CHANGE:
            return {
                ...state,
                sortBy: {
                    ...state.sortBy,
                    order: action.payload.value,
                },
                allMovies: action.payload.array
            }
        case GENDER_CHANGE:
            return {
                ...state,
                sortBy: {
                    ...state.sortBy,
                    filter: action.payload,
                }
            }
        default:
            return state;
    }
}