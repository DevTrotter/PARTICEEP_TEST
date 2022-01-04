import {useState, useEffect} from 'react'
import StyledHeader from './StyledHeader'
import { GrFormSearch } from 'react-icons/gr'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import {DebounceInput} from 'react-debounce-input'
import { useDispatch } from 'react-redux'
import { filterPlayer } from '../../redux/action/playerAction/playerAction'
import { useLocation } from 'react-router-dom'

export const Header = () => {
    const { pathname } = useLocation()
    const [search, setSearch] = useState('')
    const { playerList } = useSelector((state => state.players))
    const dispatch = useDispatch()

    useEffect(() => {
        let result = playerList?.filter(player => player.lastname.toUpperCase().indexOf(search.toUpperCase()) > -1)
        dispatch(filterPlayer(result))
        console.log('bonjour')
    },[search])
    return (
        <StyledHeader>
            <Link to='/'>
                <h1>Tenis Player.app</h1>
            </Link>
            { pathname === '/' &&
            
                <div className='wrapper-input'>
                    <DebounceInput
                        type='text'
                        minLength={1}
                        onChange={event => setSearch(event.target.value)}
                        debounceTimeout={500}
                        placeholder='Nom...'
                    />
                    <GrFormSearch/>
                </div>
            }
            
        </StyledHeader>
    )
}
