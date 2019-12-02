import React from "react";
import styled from "styled-components";
import {  colors, breakpoints } from "../../styles/variables";
import Branch from "./branch";
const FirBranches = styled.div`
  text-align: center;
  .firBoxes:before, 
  .firBoxes:after{
    content: "";
    position: absolute;
    width: 0;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
  }
  .firBoxes:before{
    bottom: 100%;
    border-bottom-width: 17.32px;
    border-bottom-style:solid;
    @media(min-width:${breakpoints.tablet}){
      border-bottom-width: 18.48px;
    }
    @media(min-width:${breakpoints.laptop}){
      border-bottom-width: 20.78px;
    }
  }
  .firBoxes:after{
    top: 100%;
    width: 0;
    border-top-width: 17.32px;
    border-top-style:solid;
    @media(min-width:${breakpoints.tablet}){
      border-top-width: 18.48px;
    }
    @media(min-width:${breakpoints.laptop}){
      border-top-width: 20.78px;
    }
  }
  
  .firRow {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack:center;
    -ms-flex-pack:center;
    justify-content:center;
  }
  #firRow-1,
  #firRow-2 {
    .firBoxes {
      background-color: ${colors.firLight};
      &:before{
        border-bottom-color:  ${colors.firLight};
      }
      &:after{
        border-top-color: ${colors.firLight};
      }
    }
  }

  #firRow-3,
  #firRow-4 {
    .firBoxes {
      background-color: ${colors.firMedium};
      &:before{
        border-bottom-color:  ${colors.firMedium};
      }
      &:after{
        border-top-color: ${colors.firMedium};
      }
    }
  }
  #firRow-5,
  #firRow-6 {
    .firBoxes {
      background-color: ${colors.firDark};
      &:before{
        border-bottom-color:  ${colors.firDark};
      }
      &:after{
        border-top-color: ${colors.firDark};
      }
    }
  }
`;
const TreeGreen = ({ firArr, checkDay }) => {


  const buildTree = () => {
    let rowLength = 1;
    let rowCounter = 0;
    let treeArr = [];
    let subArr = [];
    firArr.map((el, i) => {
      subArr.push(
        <Branch key={`${i}${el}`} id={`box-${i}`} day={el} checkDay={checkDay} >
          {el}
        </Branch>
      );
      rowCounter++;

      if (rowCounter === rowLength) {
        rowLength++;

        treeArr.push(
          <div
            className="firRow"
            id={`firRow-${rowCounter}`}
            key={`${i}${el}000`}
          >
            {subArr}
          </div>
        );
        rowCounter = 0;
        subArr = [];
      }
      return subArr;
    });
    return treeArr;
  };
  return <FirBranches>{buildTree()}</FirBranches>;
};
export default TreeGreen;
