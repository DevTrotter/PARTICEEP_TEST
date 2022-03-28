import styled from "styled-components";

const StyledBestMovie = styled.section`
    h1{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        color: #FFFFFF;
        padding: 48px 96px;
    }

    .separator{
        width: calc(100% - 184px);
        height: 2px;
        margin: 48px 92px; 
        background-color: #2F3D57;
    }

    @media (max-width: 600px) {
        .separator{
            width: calc(100% - 72px);
            margin: 12px 36px 24px 36px; 
        }
        h1{
            font-size: 18px;
            padding: 48px 36px;
        }
    }
`

export default StyledBestMovie