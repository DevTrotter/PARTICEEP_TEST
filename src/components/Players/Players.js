import React from 'react'
import StyledPlayers from './StyledPlayers'
import { Link } from 'react-router-dom'

export const Players = ({ player }) => {{}
    return (
        <StyledPlayers>
            <Link to={`/id/${player.id}`}>
                <div className='wrapper-img'>
                    <img src={player.picture} alt='player'/>
                </div>
                <div className='wrapper-bio'>
                    <h2>Prénom: {player.firstname}</h2>
                    <h2>Nom: {player.lastname}</h2>
                    <h2>Rang: {player.data.rank}</h2>
                </div>
            </Link>
        </StyledPlayers>
    )
}
