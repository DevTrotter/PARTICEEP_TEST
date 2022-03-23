import { combineReducers } from 'redux'

import movies from './movieReducer/movieReducer'

export default combineReducers({
    movies,
})