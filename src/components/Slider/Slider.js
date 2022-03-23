import { useEffect } from 'react'
import StyledSlider from './StyledSlider'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode, Navigation } from "swiper";
import { useSelector, useDispatch } from 'react-redux';
import { getMoviePopular } from '../../redux/action/movieAction/movieAction'

export const Slider = () => {
    const dispatch = useDispatch()
    const mostPopular = useSelector((state => state.movies.mostPopular))
    const fetchMovie = async() => {
        dispatch(getMoviePopular())
    }
    useEffect(() => {
        fetchMovie()
        console.log(mostPopular)
    }, [])
    return (
        <StyledSlider>
            <Swiper
                slidesPerView={4}
                spaceBetween={50}
                freeMode={true}
                slidesPerGroup={1}
                loopFillGroupWithBlank={true}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[FreeMode, Navigation]}
                className="mySwiper"
            >
                { mostPopular &&
                    mostPopular.map(movie =>
                    <SwiperSlide>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
                    </SwiperSlide>
                    )
                }
            </Swiper>
        </StyledSlider>
    )
}
