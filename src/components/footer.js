import React from "react";
import { colors, fonts } from "../styles/variables";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background: ${colors.accent1};
  color: ${colors.snow};
  font-family: ${fonts.text};
  div {
    margin: 0 auto;
    max-width: 900px;
    padding: 1.45rem 1.1rem;

    a {
      color: ${colors.snow};
      text-decoration: none;
      display: inline-block;
      -webkit-transition: all 0.4s ease-in-out;
      transition: all 0.4s ease-in-out;
      &:hover {
        text-decoration: underline;
        color: #fff;
      }
    }
  }
`;
const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <p>
          © {new Date().getFullYear()}, Built by Santa's naughty elf,
          ihatetoast, with <a href="https://www.gatsbyjs.org">Gatsby</a>, a
          framework on his Good List.
        </p>
      </div>
    </StyledFooter>
  );
};

export default Footer;
