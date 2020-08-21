import React from "react";

import { StyledCell } from "./StyledCell";
import { TETROMINOS } from "../../helpers/tetrominos";

const Cell = ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type].color}>
    {console.log("re render cell - memo")}
  </StyledCell>
);

export default React.memo(Cell);
