import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { colors, fonts, breakpoints } from "../styles/variables";
const StyledHeader = styled.header`
  background: ${colors.red};
  margin-bottom: 0.5rem;
  border-bottom: 5px solid ${colors.redDark};
  .titleWrapper {
    margin: 0 auto;
    max-width: 900px;
    padding: .75em .2em;
    text-align:center;
    h1 {
      font-family: ${fonts.headings};
      font-size: 1.5em;
      color:${colors.star2};
      @media(min-width:${breakpoints.tablet}){
        font-size: 1.8em;
      }
      @media(min-width:${breakpoints.desktop}){
        font-size: 2.2em;
      }
    }
  }
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <div className="titleWrapper">
      <h1>{siteTitle}</h1>
    </div>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
