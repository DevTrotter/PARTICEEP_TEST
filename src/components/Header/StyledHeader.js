import styled from 'styled-components'

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 36px 96px;

    form{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 300px;
        height: 36px;
        position: relative;
        button{
            height: 34px;
            width: 34px;
            position: absolute;
            top: 0px;
            border: 0;
            right: 0px;
            background-color: rgba(255,255,255,0.0);
            cursor: pointer;
            svg{
                width: 100%;
                height: 100%;
                color: #2586FA;
            }
        }

        input{
            height: 100%;
            border-radius: 12px;
            border: 0;
            background-color: #253755;
            width: 100%;
            padding-left: 20px;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 14px;
            color: #586E94;
        }

        input::placeholder{
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 14px;
            color: #586E94;
        }
    }
`

export default StyledHeader