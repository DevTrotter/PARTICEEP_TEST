import { AllMovies } from '../AllMovies/AllMovies'
import { BestMovie } from '../BestMovies/BestMovies'
import StyledLanding from './StyledLanding'

export const Landing = () => {
    return (
        <StyledLanding>
            <BestMovie/>
            <AllMovies/>
        </StyledLanding>
    )
}
