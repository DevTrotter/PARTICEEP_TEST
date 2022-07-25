import styled from "styled-components";

const StyledCard = styled.div`
  width: 150px;
  position: relative;

  :hover {
    .container-hover {
      display: flex;
    }
  }

  img {
    width: 150px;
    border-radius: 12px;
    height: 225px;
    transition: 300ms;
  }

  h6 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    color: #ffffff;
  }

  span {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #586e94;
  }

  .container-title {
    padding: 10px 0;
  }

  button {
    position: absolute;
    top: -8px;
    right: -8px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background-color: #586e94;
    border: #ffffff 1px solid;
    border-radius: 50%;
    transition: 300ms;
    z-index: 2;
    cursor: pointer;
    svg {
      width: 12px;
      height: 12px;
      color: #ffffff;
    }
  }

  button:hover {
    background-color: #0d1e38;
  }

  .container-hover {
    display: none;
    position: absolute;
    top: 0px;
    right: 0px;
  }
`;
export default StyledCard;
