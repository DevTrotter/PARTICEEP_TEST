import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import StyledPlayer from './StyledPlayer'
import { useDispatch, useSelector } from 'react-redux'
import { getPlayerByUid } from '../../redux/action/playerAction/playerAction'
import { IoMdArrowRoundBack } from 'react-icons/io';

export const Player = () => {
    const history = useNavigate()
    const { playerSelect } = useSelector((state => state.players))
    const dispatch = useDispatch()
    const {slug} = useParams()
    const fetchPlayerByID = async() => {
        await dispatch(getPlayerByUid(slug * 1))
    }
    useEffect(() => {
        fetchPlayerByID()
    }, [])
    return (
        <StyledPlayer>
            { playerSelect &&
                <div className='wrapper-player'>
                    <div className='wrapper-image'>
                        <img src={playerSelect.picture} alt='player'/>
                    </div>
                    <h2>Nom: {playerSelect.lastname}</h2>
                    <h2>Prénom: {playerSelect.firstname}</h2>
                    <h2>Rang: {playerSelect.data.rank}</h2>
                    <h2>Point: {playerSelect.data.points}</h2>
                    <h2>Age: {playerSelect.data.age}</h2>
                </div>
            }
            <IoMdArrowRoundBack onClick={() => history("/")}/>
        </StyledPlayer>
    )
}
