import styled from "styled-components";

const StyledFilter = styled.div`
  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    padding-left: 92px;
    color: #ffffff;
  }

  .param {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 36px 92px 36px 92px;

    .container-select {
      display: flex;
    }

    h2 {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      color: #586e94;
    }

    .container-display {
      display: flex;
      align-items: center;
      justify-content: center;
      .container-arrow {
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          color: #586e94;
          width: 28px;
          height: 28px;
          background: rgba(37, 55, 85, 0);
          border-radius: 8px;
          transition: 300ms;
          cursor: pointer;
        }
        svg:hover {
          background: rgba(37, 55, 85, 1);
        }
      }
    }

    .container-sort {
      display: flex;
      align-items: center;
      justify-content: start;
    }

    .selector {
      border: solid 1px #586e94;
      border-radius: 12px;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      color: #586e94;
      svg {
        color: #586e94;
      }
      &:hover {
        border: solid 1px #586e94;
        background-color: #253755;
      }
    }

    .container-filter {
      display: flex;
      align-items: center;
      justify-content: start;
    }
  }

  @media (max-width: 990px) {
    .param {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  @media (max-width: 600px) {
    h1 {
      padding-left: 36px;
      font-size: 18px;
    }
    .param {
      padding: 24px 36px 24px 36px;
      .container-select {
        display: flex;
        flex-direction: column;
      }
      .container-filter {
        display: flex;
        align-items: center;
        justify-content: start;
      }
    }
  }
`;

export default StyledFilter;
