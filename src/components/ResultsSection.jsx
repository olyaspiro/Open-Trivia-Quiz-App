import React from "react";

const ResultsSection = ({ score, userInfo, correctAnswer, onRestart }) => {
  const isCorrect = score > 0;

  return (
    <div className="results">
      <h2>
        {isCorrect
          ? `Nice job, ${userInfo.name}! You got the right answer!`
          : `Wrong answer, ${userInfo.name}.`}
      </h2>

      {!isCorrect && (
        <p>
          The correct answer was:{" "}
          <strong dangerouslySetInnerHTML={{ __html: correctAnswer }} />
        </p>
      )}

      <button onClick={onRestart}>Try Another Question</button>
    </div>
  );
};

export default ResultsSection;
