import React, { useState } from "react";

const HomePage = ({ onStart }) => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    difficulty: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, category, difficulty } = formData;

    if (!name || !category || !difficulty) {
      setError("Please fill out all fields.");
      return;
    }

    setError("");
    onStart(formData);
  };

  return (
    <div className="home">
      <h1>Open Trivia Database Quiz</h1>
      <p className="instructions">
        Answer multiple-choice questions from your selected category and
        difficulty. <br/>
        Fill out the form and click Start!
      </p>

      <form onSubmit={handleSubmit} className="quiz-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label htmlFor="category">Question Category:</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">- Choose the category -</option>
            <option value="9">General Knowledge</option>
            <option value="10">Books</option>
            <option value="11">Film</option>
            <option value="12">Music</option>
            <option value="17">Science & Nature</option>
            <option value="18">Computers</option>
            <option value="21">Sports</option>
            <option value="23">History</option>
            <option value="24">Politics</option>
            <option value="27">Animals</option>
          </select>
        </div>

        <div>
          <label htmlFor="difficulty">Difficulty Level:</label>
          <select
            id="difficulty"
            name="difficulty"
            value={formData.difficulty}
            onChange={handleChange}
          >
            <option value=""> - Choose the difficulty - </option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        {error && <p className="error">{error}</p>}

        <button type="submit">Start Quiz</button>
      </form>
    </div>
  );
};

export default HomePage;
