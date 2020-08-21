import styled from "styled-components";

import bgImage from "../../assets/img/bg.png";

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bgImage}) #000;
  background-size: cover;
  overflow: hidden;

  @media screen and (max-width: 480px) {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 40px;
  margin: 0 auto;
  max-width: 900px;

  aside {
    width: 100%;
    max-width: 200px;
    height: 100vh;
    display: block;
    padding: 0 10px;
  }

  @media screen and (max-width: 480px) {
    max-width: 100%;
    max-height: 100%;
    padding: 20px 5px 20px 15px;
  }
`;
