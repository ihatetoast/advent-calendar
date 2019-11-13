import React, { Component } from "react";
import { splitTree } from "../../utils";
class TreeGreen extends Component {
  createTree = () => {
    const wholeTreeArr = splitTree();
    const treeArr = wholeTreeArr[0];

    let treeamid = [];
    for (let i = 0; i <= 5; i++) {
      let branches = [];
      for (let j = 0; j <= i; j++) {
        branches.push(<span key={j}>{`${j + 1}`}</span>);
      }
      treeamid.push(<div key={i}>{branches}</div>);
    }
    return treeamid;
  };
  render() {
    return <div>{this.createTree()}</div>;
  }
}
export default TreeGreen;
