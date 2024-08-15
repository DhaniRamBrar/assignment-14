import React from 'react';
import styled from 'styled-components';
import Text from '../stories/Text/Text.tsx';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  font-family: 'Arial, sans-serif';
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const InfoSection = styled.div`
  flex: 1;
  padding-right: 20px;

  @media (max-width: 768px) {
    padding-right: 0;
    padding-bottom: 20px;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  text-align: right;

  @media (max-width: 768px) {
    text-align: left;
  }
`;

const ProfileImage = styled.img`
  width: 50%;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

function BasicInfo() {
  return (
    <Container>
      <InfoSection>
        <Text 
          text="Basic Information"
          fontSize="24px"
          fontWeight="bold"
          color="#007BFF"
          letterSpacing="1px"
        />
        <Text 
          text="My name is Dhani Ram and I am a student at Red River College."
          fontSize="16px"
          fontWeight="normal"
          color="#333"
          letterSpacing="0.5px"
        />
        <Text 
          text="This portfolio showcases my work, skills, and projects that I have completed during my studies and professional career. It includes a variety of projects ranging from web development to software engineering."
          fontSize="16px"
          fontWeight="normal"
          color="#333"
          letterSpacing="0.5px"
        />
      </InfoSection>
      <ImageSection>
        <ProfileImage src="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="Profile" />
      </ImageSection>
    </Container>
  );
}

export default BasicInfo;
