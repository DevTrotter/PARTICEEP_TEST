import styled from "styled-components";
import backgroundImage from "../../images/backgrounbImage.png"

const StyledLayout = styled.main`
    position: relative;
    .background{
        position: absolute;
        top: 0px;
        z-index: -1;
        .background-img{
            width: 100vw;
            height:100vh;
            background: url(${backgroundImage}) no-repeat;
            background-size: cover;
            mix-blend-mode: luminosity;
            opacity: 0.2;
            
        }
    }
`

export default StyledLayout