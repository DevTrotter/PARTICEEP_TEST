import React from 'react'
import { Slider } from '../Slider/Slider'
import StyledBestMovie from './StyledBestMovies'


export const BestMovie = () => {
    return (
        <StyledBestMovie>
            <h1>Les 10 meilleurs films</h1>
            <Slider/>
            <div className="separator"></div>
        </StyledBestMovie>
    )
}
