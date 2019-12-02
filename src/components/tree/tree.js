import React from "react";
import styled from "styled-components";
import Star from "./star";
import TreeGreen from "./treeGreen";
import Trunk from "./trunk";
import { splitTree, checkDay } from "../../utils";
const StarRow = styled.div`
display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-pack:center;
  -ms-flex-pack:center;
  justify-content:center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  z-index: 10;
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

      <TreeGreen firArr={firArr} checkDay={checkDay} />
      <Trunk trunkArr={trunkArr} checkDay={checkDay} />
    </div>
  );
}
