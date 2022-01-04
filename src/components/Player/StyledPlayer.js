import styled from "styled-components";

const StyledPlayer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px 0px;
    position: relative;
    svg{
        position: absolute;
        top: 36px;
        left: 36px;
        width: 36px;
        height: 36px;
        color: black;
        cursor: pointer;
    }
    .wrapper-player{
        width: 300px;
        background-color: #E3E3E3;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 24px;
        padding: 24px 0;
        .wrapper-image{
            width: 150px;
            height: 150px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            margin-bottom: 12px;
            img{
                width: 100%;
                height: auto;
            }
        }
        h2{
            margin: 6px 0px;
            font-family: 'Poppins';
            font-size: 16px;
            color: black;
        }
    }
`
export default StyledPlayer