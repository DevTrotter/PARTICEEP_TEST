import styled from "styled-components";
import backgroundImage from "../../images/backgrounbImage.png"

const StyledLayout = styled.main`
    position: relative;
    width: 100%;
    .background{
        width: 100%;
        height: auto;
        position: absolute;
        top: 0px;
        z-index: -1;
        .background-img{
            width: 100%;
            height: 850px;
            background: url(${backgroundImage}) no-repeat center fixed;
            background-size: cover;
            opacity: 0.2;
            
        }
    }
`

export default StyledLayout