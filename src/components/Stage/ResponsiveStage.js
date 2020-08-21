import styled from "styled-components";

export const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${(props) => props.height},
    calc(25vw / ${(props) => props.width})
  );
  grid-template-columns: repeat(${(props) => props.width}, 1fr);
  grid-gap: 1px;
  border: 2px solid #333;
  width: 100%;
  max-width: 25vw;
  background: #1b1b1b;

  @media screen and (max-width: 480px) {
    max-width: 100%;
    grid-template-rows: repeat(
      ${(props) => props.height},
      calc(80vw / ${(props) => props.width})
    );
    max-width: 80vw;
  }
`;
