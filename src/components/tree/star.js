//day 25

import React from "react";
import styled from "styled-components";
import { colors, breakpoints } from "../../styles/variables";
const StarWrapper = styled.div`
  display: inline-block;
  width: 2em;
  height: 2em;
  background-color: ${colors.star1};
  @media (min-width: ${breakpoints.tablet}) {
    width: 3em;
    height: 3em;
  }
  @media (min-width: ${breakpoints.laptop}) {
    width: 4em;
    height: 4em;
  }
`;

const Star = ({ day, checkDay }) => {
  return checkDay(12, day) ? (
    <StarWrapper className="starWrapper">
      <div className="starDoor">open</div>
    </StarWrapper>
  ) : (
    <StarWrapper className="starClosed">25</StarWrapper>
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
