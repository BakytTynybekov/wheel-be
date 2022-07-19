import React, { useState } from "react";

function Question({ panel }) {
  const [activeQuestion, setActiveQuestion] = useState(false);

  return (
    <div className={activeQuestion ? "activeQuestion question" : "question"}>
      <h3 onClick={() => setActiveQuestion(!activeQuestion)}>
        {panel.question}
        <span className="plus">
          <i class="fa-solid fa-circle-plus"></i>{" "}
        </span>
      </h3>
      <p>{panel.answer}</p>
    </div>
  );
}

export default Question;
