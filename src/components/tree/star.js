//day 25

import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../../styles/variables";
import { checkDay } from "../../utils";
const StarWrapper = styled.div`
  position: relative;
  width: 3em;
  height: 3em;
  background-color: ${colors.star1};
`;

// const checkDay = (mo, day) => {
//   const today = new Date();
//   console.log(today.getMonth());
//   return today.getDate() === day && today.getMonth() + 1 === mo;
// };

const Star = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isChrissy, setIsChrissy] = useState(false);

  return checkDay(12, 25) ? (
    <StarWrapper className="starWrapper">
      <div className="starDoor">open</div>
    </StarWrapper>
  ) : (
    <StarWrapper className="starClosed">is NOT open</StarWrapper>
  );
};
export default Star;

/**
 * 
 * const isToday = (someDate) => {
  const today = new Date()
  return someDate.getDate() == today.getDate() &&
    someDate.getMonth() == today.getMonth() &&
    someDate.getFullYear() == today.getFullYear()
}
 */
