import React, { useState } from "react";
import styled from "styled-components";
import { colors, fonts, breakpoints } from "../../styles/variables";
import {randoNummo} from '../../utils';
const FirBranch = styled.div`
position:relative;
display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-pack:center;
  -ms-flex-pack:center;
  justify-content:center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-family: ${fonts.text};
  width: 60px;
  height: 60px;
  border-radius: 1px;
  margin: 0;
  &:before, 
  &:after{
    content: "";
    position: absolute;
    width: 0;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
  }
  @media (min-width: ${breakpoints.tablet}) {
    width: 64px;
    height: 64px;
    border-radius: 3px;
    &:before, 
    &:after{
      border-left-width: 32px;
      border-right-width: 32px;
    }
  }
  @media (min-width: ${breakpoints.laptop}) {
    width: 72px;
    height: 72px;
    border-radius: 8px;
    &:before, 
    &:after{
      border-left-width: 36px;
      border-right-width: 36px;
    }
  }
  &.ornament-wrapper{
    box-shadow:0 0 2px 2px ${colors.star2};
  }


`;
const FirDate = styled.div`
position:relative;
display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-pack:center;
  -ms-flex-pack:center;
  justify-content:center;
  -webkit-box-align: center;
  -ms-flex-align: center;
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
  width:5px;
  height:5px;
  top:-4px;
  background:${colors.star2};
  &:after{
    content: '{';
    position:absolute;
    top:-4px;
    left:-0.5px;
    font-size: 7px;
    transform: rotate(90deg);
  }
  &:before{
    content:'J';
    position:absolute;
    top: -9px;
    left: 1px;
    font-size:10px;
    transform: rotate(180deg);
  }
  @media (min-width: ${breakpoints.tablet}) {
    width:6px;
    height:6px;
    top:-5px;
    &:after{
      top:-6px;
      left:0px;
      font-size: 10px;
      transform: rotate(90deg);
    }
    &:before{
      top: -13px;
      font-size:14px;
    }
}
  @media (min-width: ${breakpoints.laptop}) {
    width:10px;
    height:10px;
    top:-9px;
    &:after{
      top:-8px;
      left:2px;
      font-size: 15px;
      transform: rotate(90deg);
    }
    &:before{
      top: -15px;
      font-size:16px;
    }
  }
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
    if (isDay) {
    setBackgroundColor(getRandoColor())
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
