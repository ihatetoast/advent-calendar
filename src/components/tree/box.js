import React, { useState } from "react";
import styled from "styled-components";
import { colors, fonts, breakpoints } from "../../styles/variables";
import {randoNummo} from '../../utils';
const TrunkBoxDiv = styled.div`
  width: 3em;
  height: 1.75em;
  font-size:18px;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-pack:center;
  -ms-flex-pack:center;
  justify-content:center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  @media (min-width: ${breakpoints.tablet}) {
    width: 4em;
  }
  @media (min-width: ${breakpoints.laptop}) {
   width: 4.5em;
  }


`;

console.log(randoNummo());
const Box = ({ day, checkDay }) => {
  
const thisDay = day;

  const [backgroundColor, setBackgroundColor] = useState(`${colors.trunk}`)
 const isDay = checkDay(12, thisDay);
const getRandoColor=()=>{
  const r = randoNummo();
  return `rgb(${r}, 0, 0`
}
  const openDoor = () => {
    if (isDay) {
    setBackgroundColor(getRandoColor())
    }
  };

  return (

      <TrunkBoxDiv style={{background:`${backgroundColor}`}} onClick={() => openDoor()}>
       {day}
      </TrunkBoxDiv>

  );
};
export default Box;
