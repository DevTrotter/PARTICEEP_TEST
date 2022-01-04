import styled from 'styled-components'

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 24px;
    height: 62px;
    background: #56ab2f;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #a8e063, #56ab2f);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #a8e063, #56ab2f); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    a{
        text-decoration: none;
        color: black;
        cursor: pointer;
        h1{
            font-family: 'Poppins';
            font-size: 24px;
            color: black;
        }
    }

    .wrapper-input{
        position: relative;
        input{
            height: 12px;
            border-radius: 6px;
            border: none;
            padding: 12px 12px;
        }
        svg{
            position: absolute;
            top: 6px;
            right: 12px;
            width: 24px;
            height: 24px;
            color: #F3F3F3;
        }
    }

`

export default StyledHeader