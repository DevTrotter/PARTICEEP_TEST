import { useEffect, useState } from "react";
import StyledSlider from "./StyledSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode, Navigation } from "swiper";
import { useSelector } from "react-redux";
import { Card } from "../Card/Card";

export const Slider = () => {
  const [valueSize, SetValueSize] = useState(5);
  const [navigation, SetNavigation] = useState(true);
  const mostPopular = useSelector((state) => state.movies.mostPopular);

  const handleSetWidth = () => {
    let widthScreen = window.innerWidth;
    if (widthScreen > 1320) SetValueSize(5);
    if (widthScreen < 1320) SetValueSize(4);
    if (widthScreen < 900) SetValueSize(3);
    if (widthScreen > 500) SetNavigation(true);
    if (widthScreen < 500) {
      SetValueSize(2);
      SetNavigation(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleSetWidth);
    return () => {
      window.removeEventListener("resize", handleSetWidth);
    };
  });

  return (
    <StyledSlider>
      <Swiper
        slidesPerView={valueSize}
        spaceBetween={30}
        freeMode={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={navigation}
        modules={[FreeMode, Navigation]}
        className="mySwiper"
      >
        {mostPopular?.map((movie, i) =>
          i < 10 ? (
            <SwiperSlide key={movie.id}>
              <Card key={movie.id} {...movie} />
            </SwiperSlide>
          ) : null
        )}
      </Swiper>
    </StyledSlider>
  );
};
