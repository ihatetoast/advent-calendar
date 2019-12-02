/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Header from "./header";
import Footer from "./footer";
import "./layout.css";
const StyledBody = styled.div`
 display: -webkit-box;
 display: -ms-flexbox;
 display: flex;
  min-height: 100vh;
  flex-direction: column;
`
const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 1100px;
  flex: 1;
  margin-bottom: 1em;
`;
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <StyledBody>
      <Header siteTitle={data.site.siteMetadata.title} />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </StyledBody>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
