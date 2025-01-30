import React, { useState } from "react";

const Accordion = ({ title, questions, isEditable, onComplete }) => {
  const [answers, setAnswers] = useState(
    questions.map(() => "No") 
  );
  const [isSaved, setIsSaved] = useState(false);

  const handleAnswerChange = (index, value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);
  };

  const handleSave = () => {
    setIsSaved(true);
    const allAnsweredYesOrNA = answers.every(
      (answer) => answer === "Yes" || answer === "NA"
    );
    if (allAnsweredYesOrNA) {
      onComplete(true);
    } else {
      onComplete(false);
    }
  };

  const handleCancel = () => {
    setIsSaved(false);
    setAnswers(questions.map(() => "No")); 
    onComplete(false);
  };

  return (
    <div className="accordion">
      <div className="accordion-header">{title}</div>
      <div className="accordion-content">
        {questions.map((question, index) => (
          <div key={index} className="question">
            <p>{question}</p>
            <label>
              <input
                type="radio"
                name={`question-${index}`}
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
                name={`question-${index}`}
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
                name={`question-${index}`}
                value="NA"
                disabled={!isEditable}
                checked={answers[index] === "NA"}
                onChange={() => handleAnswerChange(index, "NA")}
              />{" "}
              NA
            </label>
          </div>
        ))}
        {isEditable && (
          <div className="buttons">
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
