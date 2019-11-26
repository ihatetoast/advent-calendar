import React from "react";
import styled from "styled-components";
import { colors, fonts, breakpoints } from "../../styles/variables";
const TrunkPan = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: ${fonts.text};
  .trunkChunk {
    width: 3em;
    height: 1.75em;
    margin-bottom: 0.15rem;

    @media (min-width: ${breakpoints.tablet}) {
      width: 4em;
    }
    @media (min-width: ${breakpoints.laptop}) {
      width: 4.5em;
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
const Trunk = ({ trunkArr, checkDay }) => {
  // console.log(checkDay);
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
