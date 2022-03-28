import styled from "styled-components";

const StyledFilter = styled.div`
    h1{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        padding-left: 92px;
        color: #FFFFFF;
    }

    .param{
        display: flex;
        align-items: center;
        justify-content: start;
        padding: 36px 0px 36px 92px;

        h2{
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            color: #586E94;
        }

        .container-sort{
            display: flex;
            align-items: center;
            justify-content: start;

        }

        .selector{
            border: solid 1px #586E94;
            borderRadius: 12px;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            font-size: 12px;
            color: #586E94;
            svg{
                color: #586E94;
            }
            &:hover{
                border: solid 1px #586E94;
                background-color: #253755;
            }
        }
        
        .container-filter{
            display: flex;
            align-items: center;
            justify-content: start;
            margin-left: 36px;
        }
    }

    @media (max-width: 600px) {
        h1{
            padding-left: 36px;
            font-size: 18px;
        }
        .param{
            flex-direction: column;
            align-items: start;
            padding: 24px 0px 24px 36px;
            .container-filter{
                display: flex;
                align-items: center;
                justify-content: start;
                margin-left: 0px;
            }
        }
    }
`

export default StyledFilter