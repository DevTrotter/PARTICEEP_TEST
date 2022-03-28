import styled from "styled-components";

const StyledSlider = styled.div`
    .swiper {
        width: 100%;
        height: 100%;
    }

    .swiper-slide {
        text-align: center;
        font-size: 18px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }

    .swiper-slide img {
        display: block;
        width: 150px;
        border-radius: 12px;
        height: 100%;
        object-fit: cover;
        cursor: pointer;
    }

    .swiper-slide{
        background: rgba(255,255,255, 0);
        display: flex;
        flex-direction: column;
    }

    .info-container{
        width: 150px;
        background-color: rgba(255, 255, 255, 0);
        text-align: start;
        padding: 12px;
        h5{
            width: 100%;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            font-size: 12px;
            color: #FFFFFF;
        }
        span{
            width: 100%;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            color: #586E94;
        }
    }
`

export default StyledSlider