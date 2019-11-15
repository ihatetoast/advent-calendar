//day 25

import React, { useState } from "react";
import styled from "styled-components";
import { colors, breakpoints, fonts } from "../../styles/variables";
const StarWrapper = styled.div`
  position: relative;
  text-align: unset;
  font-family: ${fonts.text};
  font-size: 24px;
  color: ${colors.snow};
  width: 48px;
  height: 48px;
  background-color: ${colors.star1};
  margin-bottom: 0.3em;
  @media (min-width: ${breakpoints.tablet}) {
  }
  @media (min-width: ${breakpoints.laptop}) {
  }

  .starClosed {
    z-index: 1;
    position: absolute;

    @media (min-width: ${breakpoints.tablet}) {
    }
    @media (min-width: ${breakpoints.laptop}) {
    }
  }
`;

const Star = ({ day, checkDay }) => {
  const isDay = checkDay(11, 15);
  const [isOpen, setIsOpen] = useState(false);
  const [sparkle, setSparkle] = useState("");
  const openDoor = () => {
    if (isDay) {
      setIsOpen(true);
      setSparkle("sparkle");
    }
  };

  return (
    <div onClick={() => openDoor()}>
      <StarWrapper className={`starWrapper ${sparkle}`}>
        <div className="starOpen">{day}</div>
      </StarWrapper>
    </div>
  );
};
export default Star;
// {
//   isOpen ? (
//     <StarWrapper className="starWrapper sparkle">
//       <div className="starOpen">open</div>
//     </StarWrapper>
//   ) : (
//       <StarWrapper className="starWrapper">
//         <div className="starClosed">
//         </div>
//       </StarWrapper>
//     )
// }
