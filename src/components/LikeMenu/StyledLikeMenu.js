import styled from "styled-components";

const StyledLikeMenu = styled.div`
  width: 150px;
  height: 225px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.85);
  transition: 300ms;

  h1 {
    width: 100%;
    padding: 0;
  }

  .like-container {
    margin: 12px 0;
    svg {
      width: 24px;
      height: 24px;
      margin: 0 12px;
      color: white;
      cursor: pointer;
    }
  }

  .gauge {
    position: relative;
    width: calc(100% - 24px);
    height: 4px;
    background-color: #e70000;
  }
  .gauge::after {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: ${({ likeGauge }) => likeGauge};
    height: 4px;
    background-color: #0cb108;
  }
`;

export default StyledLikeMenu;
