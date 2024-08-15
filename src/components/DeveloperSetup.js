import React from "react";
import Table from "../stories/Table/Table.tsx"; 
import Text from "../stories/Text/Text.tsx";
function DeveloperSetup() {
  const setupData = [
    {
      description: "VSCode Set Up",
      details: "Extensions: Prettier, ESLint, Live Server. Themes: One Dark Pro, Dracula Official. Settings: Auto Save, Format on Save."
    },
    {
      description: "Terminal Set Up",
      details: "Oh My Zsh with Powerlevel10k theme, iTerm2 with Solarized Dark theme, Custom Aliases, and Shortcuts."
    },
    {
      description: "Preferred Editor Font",
      details: "Fira Code with ligatures enabled. Font Size: 14px. Line Height: 1.5."
    }
  ];

  const headers = ["Description", "Details"];
  const rows = setupData.map(setup => [setup.description, setup.details]);

  return (

      <div style={{ padding: '20px' }}>
      <Text 
    text="Basic Information"
    fontSize="24px"
    fontWeight="bold"
    color="#007BFF"
    letterSpacing="1px"
  />
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
  );
}

export default DeveloperSetup;
