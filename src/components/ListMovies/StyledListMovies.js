import styled from "styled-components";

const StyledListMovies = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 20%);
    grid-auto-rows: 350px;
    align-items: center;
    justify-items: center;
    justify-content: center;
    .infinite-scroll-component__outerdiv{
        display: none;
    }

    @media (max-width: 1180px) {
        grid-template-columns: repeat(4, 25%);
    }

    @media (max-width: 790px) {
        grid-template-columns: repeat(3, calc(100% / 3));
    }

    @media (max-width: 600px) {
        grid-template-columns: repeat(2, 50%);
    }
`

export default StyledListMovies