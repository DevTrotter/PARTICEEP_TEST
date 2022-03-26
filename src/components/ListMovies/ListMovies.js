import {useState, useEffect} from 'react'
import StyledListMovies from './StyledListMovies'
import { useSelector, useDispatch } from 'react-redux';
import { Card } from '../Card/Card';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getNextMovie } from '../../redux/action/movieAction/movieAction'

export const ListMovies = () => {
    const dispatch = useDispatch()
    const {allMovies} = useSelector((state => state.movies))
    const [page, setPage] = useState(1)

    const fetchApi = () => {
        if(page > 1){
            dispatch(getNextMovie(page, allMovies))
        }
    }

    useEffect(() => {
        fetchApi()
    },[page])

    return (
        <StyledListMovies>
            <InfiniteScroll
            dataLength={allMovies.length}
            next={() => setPage(page + 1)}
            hasMore={true}
            endMessage={
                <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                </p>
            }
            >

            </InfiniteScroll>
            { allMovies &&
                allMovies.map((movie, i) => <Card key={movie.original_title + i} {...movie}/>)
            }
        </StyledListMovies>
    )
}
