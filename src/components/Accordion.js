import React, { useState } from "react";

const Accordion = ({ title, questions, isEditable, onComplete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [answers, setAnswers] = useState(questions.map(() => "No"));
  const [isSaved, setIsSaved] = useState(false);
  const [hasSelection, setHasSelection] = useState(false); // Track if any radio button has been clicked

  const handleAnswerChange = (index, value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);
    setHasSelection(true); // Enable Save and Cancel buttons after selecting a radio button
  };

  const handleSave = () => {
    setIsSaved(true);
    const allAnsweredYesOrNA = answers.every(
      (answer) => answer === "Yes" || answer === "NA"
    );
    onComplete(allAnsweredYesOrNA);
  };

  const handleCancel = () => {
    setIsSaved(false);
    setAnswers(questions.map(() => "No"));
    setHasSelection(false); // Hide Save and Cancel buttons
    onComplete(false);
  };

  return (
    <div className="accordion">
      <div
        className="accordion-header"
        onClick={() => setIsOpen(!isOpen)}
        style={{ cursor: "pointer", fontWeight: "bold", padding: "10px", border: "1px solid black", backgroundColor: "#f4f4f4" }}
      >
        {title} {isOpen ? "▲" : "▼"}
      </div>

      {isOpen && (
        <div className="accordion-content" style={{ padding: "10px", border: "1px solid gray" }}>
          {questions.map((question, index) => (
            <div key={index} className="question">
              <p>{question}</p>
              <label>
                <input
                  type="radio"
                  name={`question-${title}-${index}`}
                  value="Yes"
                  disabled={!isEditable}
                  checked={answers[index] === "Yes"}
                  onChange={() => handleAnswerChange(index, "Yes")}
                />{" "}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name={`question-${title}-${index}`}
                  value="No"
                  disabled={!isEditable}
                  checked={answers[index] === "No"}
                  onChange={() => handleAnswerChange(index, "No")}
                />{" "}
                No
              </label>
              <label>
                <input
                  type="radio"
                  name={`question-${title}-${index}`}
                  value="NA"
                  disabled={!isEditable}
                  checked={answers[index] === "NA"}
                  onChange={() => handleAnswerChange(index, "NA")}
                />{" "}
                NA
              </label>
            </div>
          ))}

          {isEditable && hasSelection && ( // Show buttons only after selecting an option
            <div className="buttons">
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Accordion;
