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
        return movies.results
    } catch(err) {
        dispatch({
            type: FETCH_POPULAR_MOVIE_FAIL,
            payload: err.response.data.error
        })
    }
}

export const getNextMovie = (page, allMovies, filters) => async dispatch => {
    dispatch({
        type: FETCH_NEXT_MOVIE_BEGIN
    })
    try {
        const res = await fetchApi({
            method: 'GET',
            url: `popular?api_key=8be38117fb0fafa10c3ed86f8f216265&language=fr-FR&page=${page}`
        })
        const NewMovies = res.data.results
        allMovies = await allMovies.concat(NewMovies)
        allMovies = await dispatch(sortFetch(filters, allMovies))
        dispatch({
            type: GET_NEXT_MOVIE_SUCCESS,
            payload: allMovies
        })
    } catch(err) {
        dispatch({
            type: FETCH_NEXT_MOVIE_FAIL,
            payload: err.response.data.error
        })
    }
}

export const sortFetch = (filters, allMovies) => async dispatch => {
    Object.entries(filters).map(([type, value]) => {
        if (type === "genderBy") {
            switch(value){
                case "Action":
                    const idActionMovie = 28
                    allMovies = allMovies.filter(movie => movie.genre_ids.find(id => id === idActionMovie))
                break;
                case "Horreur":
                    const idHorrorMovie = 27
                    allMovies = allMovies.filter(movie => movie.genre_ids.find(id => id === idHorrorMovie))
                break;
                case "Amour":
                    const idLoveMovie = 10749
                    allMovies = allMovies.filter(movie => movie.genre_ids.find(id => id === idLoveMovie))
                break;
                default:
                    console.log('error is comming')
            }
        }
        if (type === 'sortBy') {
            if (value === "Ordre alphabétique") {
                allMovies.sort((a,b) => a.original_title < b.original_title ? -1 : 1)
            }
        }
    })
    return allMovies
}

export const switchSort = (value, type, filters) => async dispatch => {
    let allMovies = await dispatch(getMoviePopular())
    filters = {
        ...filters,
        [type]: value
    }
    console.log(filters)
    Object.entries(filters).map(([type, value]) => {
        if (type === "genderBy") {
            switch(value){
                case "Action":
                    const idActionMovie = 28
                    allMovies = allMovies.filter(movie => movie.genre_ids.find(id => id === idActionMovie))
                break;
                case "Horreur":
                    const idHorrorMovie = 27
                    allMovies = allMovies.filter(movie => movie.genre_ids.find(id => id === idHorrorMovie))
                break;
                case "Amour":
                    const idLoveMovie = 10749
                    allMovies = allMovies.filter(movie => movie.genre_ids.find(id => id === idLoveMovie))
                break;
                default:
                    console.log('error is comming')
            }
        }
        if (type === 'sortBy') {
            if (value === "Ordre alphabétique") {
                allMovies.sort((a,b) => a.original_title < b.original_title ? -1 : 1)
            }
        }
    })
    dispatch({
        type: FILTERS_CHANGE,
        payload: {
            filters,
            array: allMovies
        }
    })
}

export const FILTERS_CHANGE = 'FILTERS_CHANGE'
export const FETCH_NEXT_MOVIE_BEGIN = 'FETCH_NEXT_MOVIE_BEGIN'
export const GET_NEXT_MOVIE_SUCCESS = 'GET_NEXT_MOVIE_SUCCESS'
export const FETCH_NEXT_MOVIE_FAIL = 'FETCH_NEXT_MOVIE_FAIL'
export const FETCH_POPULAR_MOVIE_BEGIN = 'FETCH_POPULAR_MOVIE_BEGIN'
export const GET_POPULAR_MOVIE_SUCCESS = 'GET_POPULAR_MOVIE_SUCCESS'
export const FETCH_POPULAR_MOVIE_FAIL = 'FETCH_POPULAR_MOVIE_FAIL'