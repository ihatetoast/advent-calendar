import React from "react";
import Star from "./star";
import TreeGreen from "./treeGreen";
import Trunk from "./trunk";
import { splitTree, checkDay } from "../../utils";
export default function Tree() {
  const wholeTree = splitTree();
  const firArr = wholeTree[0];
  const trunkArr = wholeTree[1];
  return (
    <div style={{ textAlign: "center" }}>
      <Star day={25} checkDay={checkDay} />
      <TreeGreen firArr={firArr} checkDay={checkDay} />
      <Trunk trunkArr={trunkArr} checkDay={checkDay} />
    </div>
  );
}
