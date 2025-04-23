import React, { useEffect, useState } from "react";

const QuestionForm = ({ onFinish, userInfo }) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [error, setError] = useState("");
  const [apiError, setApiError] = useState("");

  useEffect(() => {
    if (!userInfo || !userInfo.category || !userInfo.difficulty) {
      setApiError("⚠️ Missing quiz setup info.");
      return;
    }

    const fetchQuestion = async () => {
      const category = Number(userInfo.category); // Convert from string if needed
      const difficulty = userInfo.difficulty;

      console.log("Fetching with category:", category, "difficulty:", difficulty);

      try {
        const res = await fetch(
          `https://opentdb.com/api.php?amount=1&type=multiple&category=${category}&difficulty=${difficulty}`
        );

        if (!res.ok) throw new Error("API call failed");

        const data = await res.json();

        if (data.results.length === 0) {
          setApiError("⚠️ No questions found for this selection.");
          return;
        }

        const q = data.results[0];
        const allAnswers = [...q.incorrect_answers];
        const randomIndex = Math.floor(Math.random() * (allAnswers.length + 1));
        allAnswers.splice(randomIndex, 0, q.correct_answer);

        setQuestion({ ...q, answers: allAnswers });
      } catch (err) {
        console.error("Fetch error:", err);
        setApiError("⚠️ Failed to load question.");
      }
    };

    fetchQuestion();
  }, [userInfo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedAnswer) {
      setError("Please select an answer.");
      return;
    }
    setError("");
    onFinish(selectedAnswer === question.correct_answer, question.correct_answer);
  };

  if (apiError) return <p style={{ color: "red" }}>{apiError}</p>;
  if (!question) return <p>Loading question...</p>;

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "600px", margin: "0 auto", textAlign: "left" }}>
      <h2 dangerouslySetInnerHTML={{ __html: question.question }} />
      {question.answers.map((answer, idx) => (
        <div key={idx} style={{ marginBottom: "0.5rem" }}>
          <label>
            <input
              type="radio"
              name="answer"
              value={answer}
              checked={selectedAnswer === answer}
              onChange={(e) => setSelectedAnswer(e.target.value)}
              style={{ marginRight: "0.5rem" }}
            />
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </label>
        </div>
      ))}

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="submit" style={{ marginTop: "1rem" }}>Submit Answer</button>
    </form>
  );
};

export default QuestionForm;

