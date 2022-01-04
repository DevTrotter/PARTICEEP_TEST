import {useEffect} from 'react'
import { Players } from '../Players/Players'
import StyledListPlayer from './StyledListPlayer'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPlayer, filterPlayer} from '../../redux/action/playerAction/playerAction'

export const ListPlayer = () => {
    const { playerList, playerFiltered } = useSelector((state => state.players))
    const dispatch = useDispatch()
    const fetchPlayer = async() => {
        dispatch(getAllPlayer())
    }
    useEffect(() => {
        fetchPlayer()
    }, [])
    return (
        <StyledListPlayer>
            { playerFiltered &&
                playerFiltered.map(player => <Players key={player.id} player={player}/>)
            }
        </StyledListPlayer>
    )
}
