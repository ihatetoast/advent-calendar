//day 25

import React, { useState } from "react";
import styled from "styled-components";
import { colors, breakpoints, fonts } from "../../styles/variables";
const StarWrapper = styled.div`
  position: relative;
  text-align: unset;
  display: flex;
  justify-content: center;
  align-items: center;
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

  .starDate {
    background: blue;
    z-index: 3;
  }
  .noSparkle {
    display: none;
  }
  .sparkle {
    position: absolute;
    z-index: 1;

    width: 100%;
    height: 100%;
    .sparkleBits {
      background-color: ${colors.star1};
      position: absolute;

      width: 50%;
      height: 50%;
      transform: rotate(45deg);
    }
    #sparkleBit-1,
    #sparkleBit-4 {
      background: ${colors.star1};
    }
    #sparkleBit-2,
    #sparkleBit-3 {
      background: ${colors.star1};
    }
    #sparkleBit-1,
    #sparkleBit-3 {
      left: 0;
    }
    #sparkleBit-2,
    #sparkleBit-4 {
      left: 50%;
    }
    #sparkleBit-1,
    #sparkleBit-2 {
      top: 0;
    }
    #sparkleBit-3,
    #sparkleBit-4 {
      top: 50%;
    }
    #sparkleBit-5 {
      background: rebeccapurple;
    }
  }
`;

const Star = ({ day, checkDay }) => {
  const isDay = checkDay(11, 25);
  const [isOpen, setIsOpen] = useState(false);
  const [sparkle, setSparkle] = useState("noSparkle");
  const openDoor = () => {
    if (isDay) {
      setIsOpen(true);
      setSparkle("sparkle");
    }
  };

  return (
    <div onClick={() => openDoor()}>
      <StarWrapper className={`starWrapper`}>
        <div className="starDate">{day}</div>
        <div className={`${sparkle}`}>
          {[1, 2, 3, 4, 5].map(el => (
            <div
              key={`boobenheimer-${el}`}
              className="sparkleBits"
              id={`sparkleBit-${el}`}
            />
          ))}
        </div>
      </StarWrapper>
    </div>
  );
};
export default Star;
