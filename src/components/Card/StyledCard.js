import styled from "styled-components";

const StyledCard = styled.div`
    margin: 48px calc((100vw - 750px) / 10 );
    width: 150px;

    img{        
        width: 150px;
        height: auto;
        border-radius: 12px;
        object-fit: cover;
        cursor: pointer;
    }

    h6{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 16px;
        color: #FFFFFF;
    }

    span{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #586E94;
    }

    div{
        padding: 10px 0;
    }
`
export default StyledCard