import React from "react";
import styled from "styled-components";
import { splitTree } from "../../utils";
import { fonts, colors, breakpoints } from "../../styles/variables";
import Branch from "./branch";
const FirBranches = styled.div`
  text-align: center;
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
  console.log(firArr);

  const buildTree = () => {
    let rowLength = 1;
    let rowCounter = 0;
    let treeArr = [];
    let subArr = [];
    firArr.map((el, i) => {
      subArr.push(
        <Branch key={`${i}${el}`} id={`box-${i}`} day={14} checkDay={checkDay}>
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
      return;
    });
    return treeArr;
  };
  // buildTree();
  return <FirBranches>{buildTree()}</FirBranches>;
};
export default TreeGreen;
