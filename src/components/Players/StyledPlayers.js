import styled from "styled-components";

const StyledPlayers = styled.li`
    a{
        display: flex;
        align-items: center;
        width: 100%;
        background-color: #E3E3E3;
        border-radius: 24px;
        margin: 12px 0px;
        height: 150px;
        cursor: pointer;
        text-decoration: none;
        color: black;
        .wrapper-bio{
            margin: 0px 24px;
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: center;
            font-family: 'Poppins';
            font-size: 16px;
            color: black;
        }
        .wrapper-img{
            width: 100px;
            height: 100px;
            overflow: hidden;
            border-radius: 60px;
            margin-left: 24px;
            img{
                width: 100%;
                height: auto;
            }
        }
    }
`

export default StyledPlayers