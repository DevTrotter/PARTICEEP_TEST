import {
    FETCH_PLAYERS_BEGIN,
    GET_PLAYERS_SUCCESS,
    FETCH_PLAYERS_FAIL,
    FETCH_PLAYER_BY_UID_BEGIN,
    GET_PLAYER_BY_UID_SUCCESS,
    FETCH_PLAYER_BY_UID_FAIL,
    FILTER_PLAYER

} from '../../action/playerAction/playerAction'

const initialState = {
    playerList: null,
    playerSelect: null,
    playerFiltered: null,

    loading: false,
    message: '',
    error: '',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_PLAYERS_SUCCESS:
            return {
                ...state,
                loading: false,
                playerList: action.payload,
                playerFiltered: action.payload,
                playerSelect: null
            }
        case FETCH_PLAYERS_BEGIN:
            return {
                ...state,
                loading: true,
                error: ''
            }
        case FETCH_PLAYERS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case FETCH_PLAYER_BY_UID_BEGIN:
            return {
                ...state,
                loading: true,
                error: ''
            }
        case GET_PLAYER_BY_UID_SUCCESS:
            return {
                ...state,
                loading: false,
                playerSelect: action.payload
            }
        case FETCH_PLAYER_BY_UID_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case FILTER_PLAYER:
            return {
                ...state,
                playerFiltered: action.payload
            }
        default:
            return state;
    }
}