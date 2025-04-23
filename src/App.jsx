import React, { useState } from "react";
import HomePage from "./components/HomePage";
import QuestionForm from "./components/QuestionForm";
import ResultsSection from "./components/ResultsSection";
import "./App.css";

const App = () => {
  const [step, setStep] = useState("home");
  const [userInfo, setUserInfo] = useState(null);
  const [score, setScore] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState("");

  const startQuiz = (data) => {
    setUserInfo(data);
    setStep("quiz");
  };

  const finishQuiz = (isCorrect, correctAns) => {
    setScore(isCorrect);
    setCorrectAnswer(correctAns);
    setStep("results");
  };

  const restartQuiz = () => {
    setUserInfo(null);
    setScore(null);
    setCorrectAnswer("");
    setStep("home");
  };

  return (
    <div className="App" style={{ textAlign: "center", marginTop: "2rem" }}>
      {step === "home" && <HomePage onStart={startQuiz} />}
      {step === "quiz" && userInfo && (
        <QuestionForm onFinish={finishQuiz} userInfo={userInfo} />
      )}
      {step === "results" && (
        <ResultsSection
          score={score}
          userInfo={userInfo}
          correctAnswer={correctAnswer}
          onRestart={restartQuiz}
        />
      )}
    </div>
  );
};

export default App;
