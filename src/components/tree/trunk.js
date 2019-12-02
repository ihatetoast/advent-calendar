import React from "react";
import styled from "styled-components";
import Box from './box'
import {  fonts } from "../../styles/variables";
const TrunkPan = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-family: ${fonts.text};

  
`;
const Trunk = ({ trunkArr, checkDay}) => {
  
  const buildTrunk = () => {
    const trunkChunk = trunkArr.map((el, i) => {
      return (
        <Box  key={`${i}${el}`} day={el}  checkDay={checkDay}>
         {el}
        </Box>
      );
    });
    return trunkChunk;
  };
  return <TrunkPan>{buildTrunk()}</TrunkPan>;
};
export default Trunk;
