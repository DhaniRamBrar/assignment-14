import React from 'react';
import styled from 'styled-components';
import Card from '../stories/Card/Card.tsx'; 
import HeroSection from "../stories/HeroImg/HeroImg.tsx"; // Assuming HeroImg is the same as HeroSection
import Text from '../stories/Text/Text.tsx'; // Assuming Text component is used for additional text

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WorkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  width: 100%;
`;

const ProjectLink = styled.a`
  text-decoration: none;
  color: blue;
  margin-top: 10px;
  display: block;
`;

const TechList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 10px;
  li {
    margin-bottom: 5px;
  }
`;

function Work() {
  const projects = [
    {
      title: "React Application",
      description: "Developed a complex React application with advanced state management using Redux and hooks.",
      imageUrl: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
      link: "https://github.com/example/react-app",
      techList: ["React", "Redux", "JavaScript"]
    },
    {
      title: "Ruby on Rails Application",
      description: "Created a robust Ruby on Rails application with integrated authentication and authorization features.",
      imageUrl: "https://cdn.iconscout.com/icon/free/png-512/ruby-on-rails-1-1174936.png",
      link: "https://github.com/example/ruby-app",
      techList: ["Ruby on Rails", "PostgreSQL", "RSpec"]
    },
    {
      title: "PHP Application",
      description: "Built a dynamic PHP application utilizing Laravel framework for efficient development and testing.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png",
      link: "https://github.com/example/php-app",
      techList: ["PHP", "Laravel", "MySQL"]
    },
    {
      title: "Dockerized Web Application",
      description: "Developed a multi-container Docker application simulating a production environment, which improved deployment efficiency and scalability.",
      imageUrl: "https://avatars.githubusercontent.com/u/5429470?s=280&v=4",
      link: "https://github.com/example/dockerized-app",
      techList: ["Docker", "Node.js", "MongoDB"]
    },
    {
      title: "Interactive UI Components",
      description: "Built interactive UI components using Storybook to enhance modular development and simplify testing processes.",
      imageUrl: "https://avatars.githubusercontent.com/u/22632046?s=280&v=4",
      link: "https://github.com/example/ui-components",
      techList: ["React", "Storybook", "CSS"]
    },
    {
      title: "Single Page Application with React",
      description: "Created a responsive SPA using React, showcasing component-based architecture and state management techniques.",
      imageUrl: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
      link: "https://github.com/example/spa-react",
      techList: ["React", "Redux", "CSS"]
    },
    {
      title: "Website Deployment and Testing",
      description: "Learned the complete cycle of deploying and testing a web application, covering continuous integration and delivery concepts.",
      imageUrl: "https://t3.ftcdn.net/jpg/02/77/59/36/360_F_277593616_ilc033ahmZztcXfPQozK51LuFKMBxLIV.jpg",
      link: "https://github.com/example/deployment-testing",
      techList: ["Docker", "Github"]
    }
  ];
  
  return (
    <div>
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHdvcmt8ZW58MHx8fHwxNjg5NTY0NTkz&ixlib=rb-4.0.3&q=80&w=1080"
        title="My Work in the course"
      />
      <Container>
        <Text 
          text="My work in this course"
          fontSize="24px"
          fontWeight="bold"
          color="#333"
          letterSpacing="0.5px"
          textDecoration="underline"
        />
        <WorkContainer>
          {projects.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              content={project.description}
              imageUrl={project.imageUrl}
              alignText="left"
              hoverEffect={true}
              backgroundColor="#f9f9f9"
              borderStyle="solid"
              borderColor="#ddd"
            >
              <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </ProjectLink>
              <TechList>
                {project.techList.map((tech, techIndex) => (
                  <li key={techIndex}>{tech}</li>
                ))}
              </TechList>
            </Card>
          ))}
        </WorkContainer>
      </Container>
    </div>
  );
}

export default Work;
