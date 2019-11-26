import React from "react";
import styled from "styled-components";
import Star from "./star";
import TreeGreen from "./treeGreen";
import Trunk from "./trunk";
import { splitTree, checkDay, checkDayTest } from "../../utils";
const StarRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default function Tree() {
  const wholeTree = splitTree();
  const firArr = wholeTree[0];
  const trunkArr = wholeTree[1];
  return (
    <div style={{ textAlign: "center" }}>
      <StarRow className="starRow">
        <Star day={25} checkDay={checkDay} />
      </StarRow>

      <TreeGreen firArr={firArr} checkDay={checkDayTest} />
      <Trunk trunkArr={trunkArr} checkDay={checkDay} />
    </div>
  );
}
