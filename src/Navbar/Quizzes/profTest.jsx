import React, { useState } from "react";
import Questions from "../questionPool.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faForward } from '@fortawesome/free-solid-svg-icons';

const Quizzes = (props) => {
  const easyQ = [];
  const mediumQ = [];
  const hardQ = [];


  for (let i = 0; i < Questions.questions.length; i++) {
    const question = Questions.questions[i];
    if (question.difficulty === "easy") {
      easyQ.push(question);
    } else if (question.difficulty === "medium") {
      mediumQ.push(question);
    } else if (question.difficulty === "hard") {
      hardQ.push(question);
    }
  }

  const wrongAnswers = {
    easy: [],
    medium: [],
    hard: []
  };

  function saveWrongAnswers(question, userAnswer) {
    wrongAnswers[question.difficulty].push({
      question: question,
      userAnswer: userAnswer
    });
  }

  const selectedQuestions = [];
  const maxQuestionsPerDifficulty = 2;

  

  for (let i = 0; i < maxQuestionsPerDifficulty; i++) {
    const randomIndex = Math.floor(Math.random() * easyQ.length);
    selectedQuestions.push(easyQ[randomIndex]);
    easyQ.splice(randomIndex, 1);
  }

  for (let i = 0; i < maxQuestionsPerDifficulty; i++) {
    const randomIndex = Math.floor(Math.random() * mediumQ.length);
    selectedQuestions.push(mediumQ[randomIndex]);
    mediumQ.splice(randomIndex, 1);
  }

  for (let i = 0; i < maxQuestionsPerDifficulty; i++) {
    const randomIndex = Math.floor(Math.random() * hardQ.length);
    selectedQuestions.push(hardQ[randomIndex]);
    hardQ.splice(randomIndex, 1);
  }

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswersCount, setWrongAnswersCount] = useState(0);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleAnswer = (selectedAnswer) => {
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setWrongAnswersCount(wrongAnswersCount + 1);
      saveWrongAnswers(currentQuestion, selectedAnswer);
    }

    handleNextQuestion();
  };

  const handleTryAgain = () => {
    selectedQuestions.length = 0;

    wrongAnswers.easy.length = 0;
    wrongAnswers.medium.length = 0;
    wrongAnswers.hard.length = 0;

    for (let i = 0; i < maxQuestionsPerDifficulty; i++) {
      const randomIndex = Math.floor(Math.random() * easyQ.length);
      selectedQuestions.push(easyQ[randomIndex]);
      easyQ.splice(randomIndex, 1);
    }

    for (let i = 0; i < maxQuestionsPerDifficulty; i++) {
      const randomIndex = Math.floor(Math.random() * mediumQ.length);
      selectedQuestions.push(mediumQ[randomIndex]);
      mediumQ.splice(randomIndex, 1);
    }

    for (let i = 0; i < maxQuestionsPerDifficulty; i++) {
      const randomIndex = Math.floor(Math.random() * hardQ.length);
      selectedQuestions.push(hardQ[randomIndex]);
      hardQ.splice(randomIndex, 1);
    }

    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setWrongAnswersCount(0);
  };

  const currentQuestion = selectedQuestions[currentQuestionIndex];

  return (
    <div className="offcanvas-header">
      <form id="manipulatinSpanTagsLoginForm" action="#" method="get" autoComplete="on">
        <div className="offcanvas-body">
          <div>
            <div className="login-box">
              <button
                type="button"
                className="btn-close"
                id="closeLoginButton"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                onClick={props.handleClose}
              >
                <FontAwesomeIcon id="closeIcon" icon={faXmark} style={{ color: "#03e9f4" }} />
              </button>
              <h2>TEST</h2>
              <form>
                <div className="user-box">
                  <input type="text" name="" required="" placeholder="Your Answer"/>
                  <label>{currentQuestion.question}</label>
                </div>
                
                <a href="#" onClick={() => handleAnswer(currentQuestion[0])}>
                  <span />
                  <span />
                  <span />
                  <span />
                  {currentQuestion[0]} <FontAwesomeIcon icon={faForward} />
                </a>
                <a href="#" onClick={() => handleAnswer(currentQuestion[1])}>
                  <span />
                  <span />
                  <span />
                  <span />
                  {currentQuestion[1]} <FontAwesomeIcon icon={faForward} />
                </a>
                <a href="#" onClick={() => handleAnswer(currentQuestion[2])}>
                  <span />
                  <span />
                  <span />
                  <span />
                  {currentQuestion[2]} <FontAwesomeIcon icon={faForward} />
                </a>
                <a href="#" onClick={() => handleAnswer(currentQuestion[3])}>
                  <span />
                  <span />
                  <span />
                  <span />
                  {currentQuestion[3]} <FontAwesomeIcon icon={faForward} />
                </a>
              </form>
            </div>
          </div>
          {currentQuestionIndex === selectedQuestions.length && (
            <div>
              <p>Correct Answers: {correctAnswers}</p>
              <p>Wrong Answers: {wrongAnswersCount}</p>
              <button onClick={handleTryAgain}>Try Again</button>
            </div>
          )}
          {props.content}
        </div>
      </form>
    </div>
  );
};

export default Quizzes;
