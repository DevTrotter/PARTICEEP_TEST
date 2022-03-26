import React from 'react'
import StyledCard from './StyledCard'

export const Card = ({original_title, poster_path, release_date}) => {
    return (
        <StyledCard>
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={original_title} />
            <div>
                <h6>{original_title}</h6>
                <span>{release_date ? new Date(release_date).toISOString().slice(0, 4) : null}</span>
            </div>
        </StyledCard>
    )
}
