import React from "react";
import HeroSection from "../stories/HeroImg/HeroImg.tsx";
import Table from "../stories/Table/Table.tsx";

function Skills() {
  const skillsData = [
      {
        description: "Front End Development",
        languages: "JavaScript, React, HTML, CSS, SASS, TypeScript",
        tools: "Webpack, Babel, Git, VSCode"
      },
      {
        description: "Back End Development",
        languages: "Node.js, Express, MongoDB, SQL, Python, Django",
        tools: "Postman, Docker, Insomnia"
      },
      {
        description: "Mobile Development",
        languages: "Java, Kotlin, Swift, React Native",
        tools: "Android Studio, Xcode, Expo"
      },
      {
        description: "Cloud & DevOps",
        languages: "AWS, Azure, Google Cloud",
        tools: "Docker, Jenkins, Kubernetes, Terraform"
      },
      {
        description: "Data Science",
        languages: "Python, R, SQL",
        tools: "Jupyter, Pandas, NumPy, TensorFlow"
      },
      {
        description: "Tools & Libraries",
        languages: "Git, Webpack, Babel, ESLint, Prettier",
        tools: "NPM, Yarn, VSCode, IntelliJ"
      }
  ];

  const headers = ["Description", "Languages/Frameworks", "Tools"];
  const rows = skillsData.map(skill => [skill.description, skill.languages, skill.tools]);

  return (
    <div>
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1508317469940-e3de49ba902e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="My Skill Set"
      />
      <div style={{ padding: '20px' }}>
        <Table
          headers={headers}
          rows={rows}
          cellColors="#f8f9fa"
          borderColor="#ddd"
          borderWidth={1}
          fontSize="14px"
          textColor="#333"
          headerBgColor="#007bff"
          rowHoverEffect={true}
          boxShadow={true}
          stripe={true}
          stripeColor="#f9f9f9"
        />
      </div>
    </div>
  );
}

export default Skills;
