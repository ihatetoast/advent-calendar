import React, { useState } from "react";
import styled from "styled-components";
import { colors, fonts, breakpoints } from "../../styles/variables";
import {randoNummo} from '../../utils';
const FirBranch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${fonts.text};
 
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 0;
  &.ornament-wrapper{
    box-shadow:0 0 2px 2px ${colors.star2};
  }
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
  .ornament-cap{
    width:10px;
    height:10px;
    color:${colors.star2};
  }

`;
const FirDate = styled.div`
position:relative;
display:flex;
justify-content:center;
align-items: center;
z-index: 3;

padding: 2px;
font-size: 18px;
width: 36px;
height: 36px;
border-radius: 50%;
background: ${props => props.ornament==="ornament" ? colors.red : `transparent`};
.noShow{
  display:none;

}
.ornament-cap{
  position:absolute;
    width:4px;
    height:4px;
    top:-4px;
    background:${colors.star2};
  }
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
`
console.log(randoNummo());
const Branch = ({ day, checkDay }) => {
  
  // const isDay = true;
const thisDay = day;
  const [ornament, setOrnament] = useState("");
  const [backgroundColor, setBackgroundColor] = useState('transparent')
 const isDay = checkDay(12, thisDay);
const getRandoColor=()=>{
  const r = randoNummo();
  const g = randoNummo();
  const b = randoNummo();
return `rgb(${r}, ${g}, ${b})`
}
  const openDoor = () => {
    setBackgroundColor(getRandoColor())
    if (isDay) {
   
      setOrnament("ornament");
    }
  };

  return (
    <div onClick={() => openDoor()}>
      <FirBranch className={ornament? 'firBoxes ornament' : 'firBoxes' }>
        <FirDate ornament={`${ornament}`} style={{background:`${backgroundColor}`}}>{day}
        <div className={ornament? 'ornament-cap' : 'noShow' }/>
        </FirDate>
       
      </FirBranch>
    </div>
  );
};
export default Branch;
