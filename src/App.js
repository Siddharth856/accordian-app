import React, { useState } from "react";
import Accordion from "./components/Accordion";

const App = () => {
  const [accordionState, setAccordionState] = useState([
    { title: "Section 1", isEditable: true, isCompleted: false },
    { title: "Section 2", isEditable: false, isCompleted: false },
    { title: "Section 3", isEditable: false, isCompleted: false },
    { title: "Section 4", isEditable: false, isCompleted: false },
  ]);

  const questionsList = [
    [
      "Is the document up to date?",
      "Have all errors been resolved?",
      "Is the format correct?",
      "Has it been reviewed by the team?",
      "Are all required sections completed?",
    ],
    [
      "Is the data validated?",
      "Has security been considered?",
      "Is the user input sanitized?",
      "Are all edge cases handled?",
      "Has it been tested for performance?",
    ],
    [
      "Is the API response time optimized?",
      "Are there redundant API calls?",
      "Is caching implemented where necessary?",
      "Are all endpoints secured?",
      "Is proper error handling in place?",
    ],
    [
      "Are user roles and permissions correctly set?",
      "Is the database structure optimized?",
      "Have the latest patches been applied?",
      "Has the final deployment checklist been reviewed?",
      "Is rollback strategy in place?",
    ],
  ];

  const handleAccordionComplete = (index, isCompleted) => {
    const updatedAccordions = [...accordionState];
    updatedAccordions[index].isCompleted = isCompleted;

    if (isCompleted) {
      if (index < updatedAccordions.length - 1) {
        updatedAccordions[index + 1].isEditable = true;
      }
    } else {
      for (let i = index + 1; i < updatedAccordions.length; i++) {
        updatedAccordions[i].isEditable = false;
        updatedAccordions[i].isCompleted = false;
      }
    }

    setAccordionState(updatedAccordions);
  };

  return (
    <div>
      <h1>Dynamic Accordions</h1>
      {accordionState.map((section, index) => (
        <Accordion
          key={index}
          title={section.title}
          questions={questionsList[index]}
          isEditable={section.isEditable}
          onComplete={(isCompleted) => handleAccordionComplete(index, isCompleted)}
        />
      ))}
    </div>
  );
};

export default App;
