I have built an Open Trivia Database Quiz App with React. 
Users can select a category, difficulty, and test their knowledge with trivia questions.
Three components (HomePage, QuestionForm and ResultsSection) receive props from App.jsx. Each of them uses those props to render data.

My Home Page welcomes users, and provides a simple form to begin the quiz. It includes:
- A welcome message and instructions;
- A text input for the user's name;
- Dropdowns to select question category and difficulty;
- Form validation to ensure all fields are completed before starting the quiz.
  
Once submitted, the quiz begins based on the user's selections.

The QuestionForm component displays a multiple-choice quiz question fetched from the Open Trivia API based on the user's selected category and difficulty. It includes:
- A multiple choice question;
- Radio button answers (looped through);
- Error handling for failed API calls;
- Validation to ensure an answer is selected before submission.
  
Once the user submits an answer, it passes the data to the parent for result handling.

The ResultsSection component shows the outcome of the user's answer after completing a question. It includes:
- A message showing whether the answer was correct or not;
- The correct answer if the user was incorrect;
- A button to restart the quiz and return to the Home Page.
  
This section provides clear feedback and allows the user to try another question easily.


