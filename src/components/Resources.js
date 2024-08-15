import React from 'react';
import styled from 'styled-components';
import HeroImg from '../stories/HeroImg/HeroImg.tsx';  
import Card from '../stories/Card/Card.tsx';  

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ResourcesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin-top: 20px;
`;

const ResourceLink = styled.a`
  text-decoration: none;
  color: blue;
  display: block;
  margin-top: 10px;
  &:hover {
    text-decoration: underline;
  }
`;

function Resources() {
    const resources = [
        {
          title: "MDN Web Docs",
          imageUrl: "https://developer.mozilla.org/favicon-48x48.97046865.png",
          summary: "Resources for developers, by developers, offering comprehensive documentation for HTML, CSS, JavaScript, and more.",
          link: "https://developer.mozilla.org/"
        },
        {
          title: "FreeCodeCamp",
          imageUrl: "https://cdn.freecodecamp.org/platform/universal/fcc_meta_1920X1080-indigo.png",
          summary: "An extensive collection of free coding lessons, exercises, and projects to help you learn web development.",
          link: "https://www.freecodecamp.org/"
        },
        {
          title: "JavaScript Info",
          imageUrl: "https://javascript.info/img/favicon/favicon.png",
          summary: "Modern JavaScript tutorial, providing detailed explanations and examples of JavaScript concepts.",
          link: "https://javascript.info/"
        },
        {
          title: "CSS Tricks",
          imageUrl: "https://css-tricks.com/apple-touch-icon.png",
          summary: "A site dedicated to teaching and demonstrating CSS techniques, tips, and tricks for web developers.",
          link: "https://css-tricks.com/"
        }
      ];

  return (
    <div>
      <HeroImg
        backgroundImage="https://images.unsplash.com/photo-1505238680356-667803448bb6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Useful Resources"
        titleColor="#FFFFFF"
        parallaxEffect={true}
      />
      <Container>
        <ResourcesGrid>
          {resources.map((resource, index) => (
            <Card
              key={index}
              title={resource.title}
              content={resource.summary}
              imageUrl={resource.imageUrl}
              alignText="center"
              hoverEffect={true}
              backgroundColor="#f0f0f0"
            >
              <ResourceLink href={resource.link} target="_blank" rel="noopener noreferrer">
                View Resource
              </ResourceLink>
            </Card>
          ))}
        </ResourcesGrid>
      </Container>
    </div>
  );
}

export default Resources;
