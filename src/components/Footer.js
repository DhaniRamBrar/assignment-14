import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #2a9d8f;
  color: #ffffff;
  text-align: center;
  padding: 10px 0;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #ffffff;
`;

function Footer() {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} Brar Portfolio. Red River College.</p>
    </FooterContainer>
  );
}

export default Footer;
