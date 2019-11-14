import React from "react";
import styled from "styled-components";
import { colors, fonts, breakpoints } from "../../styles/variables";
const TrunkPan = styled.div`
  .trunkChunk {
    width: 3em;
    height: 1em;
    margin: 0.1rem auto;
    @media (min-width: ${breakpoints.tablet}) {
      width: 4em;
      margin: 0.15rem auto;
    }
    @media (min-width: ${breakpoints.laptop}) {
      width: 4.5em;
      margin: 0.2rem auto;
    }
  }
  #chunk-0,
  #chunk-1 {
    background: ${colors.trunk};
  }
  #chunk-2 {
    background: ${colors.red};
  }
`;
const Trunk = ({ trunkArr }) => {
  console.log(trunkArr);
  const buildTrunk = () => {
    const trunkChunk = trunkArr.map((el, i) => {
      return (
        <div className="trunkChunk" key={`${i}${el}`} id={`chunk-${i}`}>
          {el}
        </div>
      );
    });
    return trunkChunk;
  };
  return <TrunkPan>{buildTrunk()}</TrunkPan>;
};
export default Trunk;
