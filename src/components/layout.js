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
const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 1100px;
  padding: 0px 1.0875rem;

  margin-bottom: 1em;

  border: 1px dotted gray; //REMOVE -- for placement only
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
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
