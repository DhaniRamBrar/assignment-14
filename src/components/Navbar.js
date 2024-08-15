import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #2a9d8f; 
  color: #ffffff;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Title = styled.h2`
  margin: 0;
  color: #e76f51; 
  font-size: 24px;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    margin-top: 10px;
  }
`;

const StyledLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-size: 18px;
  margin: 0 10px;

  &:hover {
    color: #e76f51; /* Changed color */
  }

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

function Navbar() {
  return (
    <Nav>
      <Title>Brar Portfolio</Title>
      <Links>
        <StyledLink to="/">Basic Info</StyledLink>
        <StyledLink to="/work">Work</StyledLink>
        <StyledLink to="/skills">Skills</StyledLink>
        <StyledLink to="/resources">Resources</StyledLink>
        <StyledLink to="/setup">Setup</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </Links>
    </Nav>
  );
}

export default Navbar;
