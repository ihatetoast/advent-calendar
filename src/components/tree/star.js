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
  color: ${colors.snow};
  font-size: 18px;
  width: 36px;
  height: 36px;
  background-color: ${colors.star1};
  margin-bottom: 0.3em;
  @media (min-width: ${breakpoints.tablet}) {
    font-size: 21px;
    width: 42px;
    height: 42px;
  }
  @media (min-width: ${breakpoints.laptop}) {
    font-size: 24px;
    width: 48px;
    height: 48px;
  }
&.sparkle{
  background: ${colors.red};
}
  .starDate {
    background: ${colors.star1};
    border-radius: 50%;
    padding: 2px;
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
    transition: all 1s  ease-in-out;
    .sparkleBits {
      
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
    #sparkleBit-5, #sparkleBit-7 {
      left: 25%;
  
      background: ${colors.accent1};
    }
    #sparkleBit-6, #sparkleBit-8 {
    top: 25%;

      background: ${colors.red};;
    }
    #sparkleBit-5{
      top:-10%
    }
    #sparkleBit-7{
      top:60%
    }
    #sparkleBit-6{
      left:60%
    }
    #sparkleBit-8{
      left:-10%
    }
  }
`;

const Star = ({ day, checkDay }) => {
  const isDay = checkDay(11, 26);
  // const isDay=true;
  
  const [sparkle, setSparkle] = useState("noSparkle");
  const openDoor = () => {
    if (isDay) {
   
      setSparkle("sparkle");
    }
  };

  return (
    <div onClick={() => openDoor()}>
      <StarWrapper className={`starWrapper ${sparkle}`}>
        <div className="starDate">{day}</div>
        <div className={`${sparkle}`}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map(el => (
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
