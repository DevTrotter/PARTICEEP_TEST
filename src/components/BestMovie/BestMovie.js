import React from 'react'
import { Slider } from '../Slider/Slider'
import StyledBestMovie from './StyledBestMovie'


export const BestMovie = () => {
    return (
        <StyledBestMovie>
            <h1>Les 10 meilleurs films</h1>
            <Slider/>
        </StyledBestMovie>
    )
}
