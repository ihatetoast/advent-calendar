import React from "react";
import styled from "styled-components";
import { colors, fonts, breakpoints } from "../../styles/variables";
const FirBranch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${fonts.text};
  font-size: 24px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 0;
  @media (min-width: ${breakpoints.tablet}) {
    width: 4em;
    height: 4em;
    margin: 0 0.2em;
  }
  @media (min-width: ${breakpoints.laptop}) {
    width: 4.5em;
    height: 4.5em;
    margin: 0 0.3em;
  }
`;
const Branch = ({ day, checkDay }) => {
  return checkDay(12, day) ? (
    <FirBranch className="firBoxes">
      <div className="firBoxOpen">open</div>
    </FirBranch>
  ) : (
    <FirBranch className="firBoxes">
      <div className="firBoxClosed">{day}</div>
    </FirBranch>
  );
};
export default Branch;
