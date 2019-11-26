import React from "react";
import styled from "styled-components";
import {  colors } from "../../styles/variables";
import Branch from "./branch";
const FirBranches = styled.div`
  text-align: center;
  .firRow {
    display: flex;
    justify-content: center;
  }
  #firRow-1,
  #firRow-2 {
    .firBoxes {
      background-color: ${colors.firLight};
    }
  }

  #firRow-3,
  #firRow-4 {
    .firBoxes {
      background-color: ${colors.firMedium};
    }
  }
  #firRow-5,
  #firRow-6 {
    .firBoxes {
      background-color: ${colors.firDark};
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
        <Branch key={`${i}${el}`} id={`box-${i}`} day={el} checkDay={checkDay}>
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
