import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { colors, fonts } from "../styles/variables";
const StyledHeader = styled.header`
  background: ${colors.red};
  margin-bottom: 0.5rem;
  border-bottom: 5px solid ${colors.redDark};
  .titleWrapper {
    margin: 0 auto;
    max-width: 900px;
    padding: 1.45rem 1.1rem;
    h1 {
      font-family: ${fonts.headings};
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
