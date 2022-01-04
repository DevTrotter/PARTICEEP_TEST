import { fetchApi } from '../../../utils/fetchApi'

export const getAllPlayer = () => async dispatch => {
    dispatch({
        type: FETCH_PLAYERS_BEGIN
    })
    try {
        const res = await fetchApi({
            method: 'GET',
            url: `/`
        })
        const players = res.data
        dispatch({
            type: GET_PLAYERS_SUCCESS,
            payload: players.players
        })
    } catch(err) {
        dispatch({
            type: FETCH_PLAYERS_FAIL,
            payload: err.response.data.error
        })
    }
}

export const getPlayerByUid = (id) => async dispatch => {
    dispatch({
        type: FETCH_PLAYER_BY_UID_BEGIN
    })
    try {
        const res = await fetchApi({
            method: 'GET',
            url: `/${id}`
        })
        const player = res.data
        dispatch({
            type: GET_PLAYER_BY_UID_SUCCESS,
            payload: player[0]
        })
    } catch(err) {
        dispatch({
            type: FETCH_PLAYER_BY_UID_FAIL,
            payload: err.response.data.error
        })
    }
}

export const filterPlayer = (newArray) => dispatch => {
    dispatch({
        type: FILTER_PLAYER,
        payload: newArray
    })
}

export const  FILTER_PLAYER = ' FILTER_PLAYER'
export const FETCH_PLAYERS_BEGIN = 'FETCH_PLAYER_BEGIN'
export const GET_PLAYERS_SUCCESS = 'GET_PLAYER_SUCCESS'
export const FETCH_PLAYERS_FAIL = 'FETCH_PLAYER_FAIL'

export const FETCH_PLAYER_BY_UID_BEGIN = 'FETCH_PLAYER_BY_UID_BEGIN'
export const GET_PLAYER_BY_UID_SUCCESS = 'GET_PLAYER_BY_UID_SUCCESS'
export const FETCH_PLAYER_BY_UID_FAIL = 'FETCH_PLAYER_BY_UID_FAIL'