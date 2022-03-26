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

export const getNextMovie = (page, allMovies, order) => async dispatch => {
    dispatch({
        type: FETCH_NEXT_MOVIE_BEGIN
    })
    try {
        const res = await fetchApi({
            method: 'GET',
            url: `popular?api_key=8be38117fb0fafa10c3ed86f8f216265&language=fr-FR&page=${page}`
        })
        const movies = res.data
        dispatch({
            type: GET_NEXT_MOVIE_SUCCESS,
            payload: movies.results
        })
    } catch(err) {
        dispatch({
            type: FETCH_NEXT_MOVIE_FAIL,
            payload: err.response.data.error
        })
    }
}

export const switchSort = (type, value, array) => async dispatch => {
    if(type === 'order'){
        if(value === 'default'){
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }else{
            array.sort((a,b) => {
                if(a.original_title < b.original_title) { return -1; }
                if(a.original_title > b.original_title) { return 1; }
                return 0;
            })
        }
        dispatch({
            type: ORDER_CHANGE,
            payload: {
                value: value,
                array: array
            }
        })
    }else {
        dispatch({
            type: GENDER_CHANGE,
            payload: value
        })
    }
}

// export const filterByGender = (array, gender) => async dispatch => {
//     if(array.length > 0){
//         switch(gender) {
//             case 'Tous':
//                 console.log(array);
//             break;
//             case 'Action':
//                 console.log("bonjour");
//             break;
//             case 'Horreur':
//                 console.log("bonjour");
//             break;
//             case 'Amour':
//                 console.log("bonjour");
//             break;
//             default:
//                 console.log('error');
//         }
//         dispatch({
//             type: FILTER_BY_GENDER_SUCCESS,
//             payload: array
//         })
//     }
// }

// export const FILTER_BY_GENDER_SUCCESS = 'FILTER_BY_GENDER_SUCCESS'
export const ORDER_CHANGE = 'ORDER_CHANGE'
export const GENDER_CHANGE = 'GENDER_CHANGE'
export const FETCH_NEXT_MOVIE_BEGIN = 'FETCH_NEXT_MOVIE_BEGIN'
export const GET_NEXT_MOVIE_SUCCESS = 'GET_NEXT_MOVIE_SUCCESS'
export const FETCH_NEXT_MOVIE_FAIL = 'FETCH_NEXT_MOVIE_FAIL'
export const FETCH_POPULAR_MOVIE_BEGIN = 'FETCH_POPULAR_MOVIE_BEGIN'
export const GET_POPULAR_MOVIE_SUCCESS = 'GET_POPULAR_MOVIE_SUCCESS'
export const FETCH_POPULAR_MOVIE_FAIL = 'FETCH_POPULAR_MOVIE_FAIL'