import React from "react";
import styled from "styled-components";
import { colors, fonts, breakpoints } from "../../styles/variables";
const FirBranch = styled.div`
  display: inline-block;
  width: 3em;
  height: 3em;
  margin: 0.1rem;
  @media (min-width: ${breakpoints.tablet}) {
    width: 4em;
    height: 4em;
    margin: 0.15rem;
  }
  @media (min-width: ${breakpoints.laptop}) {
    width: 4.5em;
    height: 4.5em;
    margin: 0.2rem;
  }
`;
const Branch = ({ day, checkDay }) => {
  return checkDay(12, day) ? (
    <FirBranch className="firBoxes">
      <div className="starDoor">open</div>
    </FirBranch>
  ) : (
    <FirBranch className="firBoxes">{day}</FirBranch>
  );
};
export default Branch;
