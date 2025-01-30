import React, { useState } from "react";
import Accordion from "./Accordion";
import "./App.css"; // Optional for styling

const App = () => {
  const [editableIndex, setEditableIndex] = useState(0);

  const questions = [
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
      "Are all APIs documented?",
      "Is the response structure correct?",
      "Have error messages been standardized?",
      "Is the request validation implemented?",
      "Are rate limits applied?",
    ],
    [
      "Are UI elements aligned?",
      "Does it work on mobile?",
      "Have accessibility guidelines been followed?",
      "Are animations smooth?",
      "Has cross-browser testing been done?",
    ],
  ];

  const handleAccordionCompletion = (index, isCompleted) => {
    if (isCompleted) {
      setEditableIndex(index + 1);
    } else {
      setEditableIndex(index);
    }
  };

  return (
    <div className="App">
      <h1>Dynamic Accordions</h1>
      {questions.map((qSet, index) => (
        <Accordion
          key={index}
          title={`Section ${index + 1}`}
          questions={qSet}
          isEditable={editableIndex === index}
          onComplete={(isCompleted) =>
            handleAccordionCompletion(index, isCompleted)
          }
        />
      ))}
    </div>
  );
};

export default App;
