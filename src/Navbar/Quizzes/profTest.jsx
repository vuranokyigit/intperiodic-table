import React, { useState } from "react";
import './profTest.css';
import Questions from "../questionPool.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faForward } from '@fortawesome/free-solid-svg-icons';

const Quizzes = (props) => {
    const easyQ = [];    // easy (kolay) zorluk seviyesine ait soruların dizisi
    const mediumQ = [];  // medium (orta) zorluk seviyesine ait soruların dizisi
    const hardQ = [];    // hard (zor) zorluk seviyesine ait soruların dizisi

    // JSON dosyasındaki tüm soruları dolaşarak zorluk seviyesine göre ayırma
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

    // Kullanıcının verdiği cevaplara göre yanlış cevapları kaydetme
    function saveWrongAnswers(question, userAnswer) {
        wrongAnswers[question.difficulty].push({
            question: question,
            userAnswer: userAnswer
        });
    }
    const selectedQuestions = [];  // Seçilen soruların dizisi
    const maxQuestionsPerDifficulty = 2;  // Her zorluk seviyesinden kaç soru seçileceği

    // Easy (kolay) zorluk seviyesinden 2 soru seçme
    for (let i = 0; i < maxQuestionsPerDifficulty; i++) {
        const randomIndex = Math.floor(Math.random() * easyQ.length);
        selectedQuestions.push(easyQ[randomIndex]);
        easyQ.splice(randomIndex, 1);  // Seçilen soruyu easyQ dizisinden kaldırma
    }

    // Medium (orta) zorluk seviyesinden 2 soru seçme
    for (let i = 0; i < maxQuestionsPerDifficulty; i++) {
        const randomIndex = Math.floor(Math.random() * mediumQ.length);
        selectedQuestions.push(mediumQ[randomIndex]);
        mediumQ.splice(randomIndex, 1);  // Seçilen soruyu mediumQ dizisinden kaldırma
    }

    // Hard (zor) zorluk seviyesinden 2 soru seçme
    for (let i = 0; i < maxQuestionsPerDifficulty; i++) {
        const randomIndex = Math.floor(Math.random() * hardQ.length);
        selectedQuestions.push(hardQ[randomIndex]);
        hardQ.splice(randomIndex, 1);  // Seçilen soruyu hardQ dizisinden kaldırma
    }
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [wrongAnswersCount, setWrongAnswersCount] = useState(0);

    const handleNextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);

    };

    var currentQuestion = selectedQuestions[currentQuestionIndex];
    const handleAnswer = (selectedAnswer) => {
        
        const isAnswerCorrect = currentQuestion.answer1 === selectedAnswer || currentQuestion.answer2 === selectedAnswer;
        console.log("calisti");
        if (isAnswerCorrect) {
            setCorrectAnswers(correctAnswers + 1);
        } else {
            setWrongAnswersCount(wrongAnswersCount + 1);
            saveWrongAnswers(currentQuestion, selectedAnswer);
        }

        handleNextQuestion();
    };


    // "Try Again" butonuna tıklama olayını yakalama
    function handleTryAgain() {
        // Seçilen soruları sıfırlama
        selectedQuestions.length = 0;

        // Yanlış cevapları tutan dizileri sıfırlama
        wrongAnswers.easy.length = 0;
        wrongAnswers.medium.length = 0;
        wrongAnswers.hard.length = 0;

        // Yeni soruları seçme işlemini tekrar yapma

        // Easy (kolay) zorluk seviyesinden 2 soru seçme
        for (let i = 0; i < maxQuestionsPerDifficulty; i++) {
            const randomIndex = Math.floor(Math.random() * easyQ.length);
            selectedQuestions.push(easyQ[randomIndex]);
            easyQ.splice(randomIndex, 1);
        }

        // Medium (orta) zorluk seviyesinden 2 soru seçme
        for (let i = 0; i < maxQuestionsPerDifficulty; i++) {
            const randomIndex = Math.floor(Math.random() * mediumQ.length);
            selectedQuestions.push(mediumQ[randomIndex]);
            mediumQ.splice(randomIndex, 1);
        }

        // Hard (zor) zorluk seviyesinden 2 soru seçme
        for (let i = 0; i < maxQuestionsPerDifficulty; i++) {
            const randomIndex = Math.floor(Math.random() * hardQ.length);
            selectedQuestions.push(hardQ[randomIndex]);
            hardQ.splice(randomIndex, 1);
        }
    }
    //console.log(hardQ.length);
    return (
        <div className="offcanvas-header">
            <form id='manipulatinSpanTagsLoginForm' action="#" method='get' autoComplete='on'>
                <div className="offcanvas-body">
                    <div>
                        <>
                            <div className="login-box">
                                <button
                                    type="button"
                                    className="btn-close"
                                    id='closeLoginButton'
                                    data-bs-dismiss="offcanvas"
                                    aria-label="Close"
                                    onClick={props.handleClose}
                                ><FontAwesomeIcon id='closeIcon' icon={faXmark} style={{ color: "#03e9f4", }} /></button>
                                <h2>TEST</h2>
                                <form>
                                <p id="currentQuestion">{currentQuestion.question}</p>
                                    <div className="user-box">
                                        <input type="text" name="" required="" placeholder="Your Answer" />
                                        <div>
                                            
                                           
                                        </div>
                                    </div>
                                    <a href="#">
                                        Next <FontAwesomeIcon icon={faForward} onClick={handleNextQuestion} />
                                    </a>
                                </form>
                            </div>
                        </>
                    </div>
                    {props.content}
                </div>
            </form>
        </div>
    )
}

export default Quizzes;