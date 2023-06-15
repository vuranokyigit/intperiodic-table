import React, { useState,useEffect } from "react";
import './profTest.css';
import Questions from "../questionPool.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faForward } from '@fortawesome/free-solid-svg-icons';

const Quizzes = (props) => {
 
    const [easyQuestions , setEasyQuestions] = useState(Questions.questions.filter(x=>x.difficulty == "easy"))
    const [mediumQuestions , setMediumQuestions] = useState(Questions.questions.filter(x=>x.difficulty == "medium"))
    const [hardQuestions , setHardQuestions] = useState(Questions.questions.filter(x=>x.difficulty == "hard"))
    const [selectedQuestions , setSelectedQuestions] = useState([])
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState();
    const [userAnswerText,setUserAnswerText] = useState("");
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState({});
    const [wrongAnswersCount, setWrongAnswersCount] = useState(0);
    const [wrongAnswers, setWrongAnswers] = useState({ });
    const [pageLoaded, setPageLoaded] = useState(false)

  
    useEffect(()=> {
        let questionArray = [];
        for (let i = 0; i < 2; i++) {
            const randomIndexe = Math.floor(Math.random() * easyQuestions.length);
            
            questionArray = [...questionArray , easyQuestions[randomIndexe]]
            easyQuestions.splice(randomIndexe, 1); 
        }
        
        for (let j = 0; j < 2; j++) {
            const randomIndexx = Math.floor(Math.random() * mediumQuestions.length);
            questionArray = [...questionArray , mediumQuestions[randomIndexx]]
            mediumQuestions.splice(randomIndexx, 1);  
        }
        for (let r = 0; r < 2; r++) {
            const randomIndexz = Math.floor(Math.random() * hardQuestions.length);
            questionArray = [...questionArray , hardQuestions[randomIndexz]]
            hardQuestions.splice(randomIndexz, 1); 
        }
        setSelectedQuestions(questionArray)
        setCurrentQuestion(questionArray[currentQuestionIndex].question)
    },[])


  
    const handleNextQuestion = () => {
        if (userAnswerText == selectedQuestions[currentQuestionIndex].answer1 || userAnswerText == selectedQuestions[currentQuestionIndex].answer2){
            setCorrectAnswersCount(correctAnswersCount + 1)
            setCorrectAnswers({...correctAnswers, [selectedQuestions[currentQuestionIndex].id]: userAnswerText})
        }else{
            setWrongAnswersCount(wrongAnswersCount + 1)
            setWrongAnswers({...wrongAnswers, [selectedQuestions[currentQuestionIndex].id]: userAnswerText})
        }
        
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setUserAnswerText("");
        if(currentQuestionIndex + 1 <= 5){
            setCurrentQuestion(selectedQuestions[currentQuestionIndex+1].question);
        }
        
        
      };
      

    //"Try Again" butonuna tıklama olayını yakalama //bu kismi ayaga kaldir//
    function handleTryAgain() {
        // Seçilen soruları sıfırlama
        setSelectedQuestions([]);
        setCurrentQuestionIndex(0);
        for (let i = 0; i < 2; i++) {
            const randomIndex = Math.floor(Math.random() * easyQuestions.length);
            setSelectedQuestions([...selectedQuestions,easyQuestions[randomIndex]]) 
            easyQuestions.splice(randomIndex, 1); 
        }
        for (let i = 0; i < 2; i++) {
            const randomIndex = Math.floor(Math.random() * mediumQuestions.length);
            setSelectedQuestions([...selectedQuestions,mediumQuestions[randomIndex]]);
            mediumQuestions.splice(randomIndex, 1);  
        }
        for (let i = 0; i < 2; i++) {
            const randomIndex = Math.floor(Math.random() * hardQuestions.length);
            setSelectedQuestions([...selectedQuestions,hardQuestions[randomIndex]]);
            hardQuestions.splice(randomIndex, 1); 
        }
    }
  
    const handleUserAnswerText = (event) => {
        setUserAnswerText(event.target.value)
 
    }
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
                                >
                                    <FontAwesomeIcon id='closeIcon' icon={faXmark} style={{ color: "#03e9f4", }} /></button>

                                {currentQuestionIndex <= 5 ? (
                                    <TestView currentQuestion={currentQuestion} handleNextQuestion={handleNextQuestion} setUserAnswerText={setUserAnswerText} handleUserAnswerText={handleUserAnswerText} userAnswerText={userAnswerText}  selectedQuestions={selectedQuestions}/>
                                ) : (
                                    <FinishQuiz
                                        selectedQuestions={selectedQuestions}
                                        handleTryAgain={handleTryAgain}
                                        correctAnswersCount={correctAnswersCount}
                                        wrongAnswersCount={wrongAnswersCount}
                                    />
                                )}
                            </div>
                        </>
                    </div>
                    {props.content}
                </div>
            </form>
        </div>
    )
}

const TestView = (props) => {
    const { currentQuestion, handleNextQuestion, handleAnswer,setUserAnswerText,handleUserAnswerText,userAnswerText ,selectedQuestions } = props
    
    return (
        <>
            <h2>TEST</h2>
            <br /><br />
            <form>
                <p id="currentQuestion">{currentQuestion}</p>
                <div className="user-box">
                    <input
                        type="text"
                        value={userAnswerText}
                        name="userAnswer"
                        required=""
                        placeholder="Your Answer"
                        onChange={(event) => handleUserAnswerText(event)}
                    />

                </div>

                <a href="#">
                    Next <FontAwesomeIcon icon={faForward} onClick={handleNextQuestion} />
                </a>

            </form>
        </>
    )
}


const FinishQuiz = (props) => {
    const { selectedQuestions, handleTryAgain, correctAnswersCount, wrongAnswersCount } = props
    return (
        <>
            <h2>TEST RESULTS</h2>
            <form>
                <p>Questions: {selectedQuestions.length}</p>
                <p>Correct Answers: {correctAnswersCount}</p>
                <p>Wrong & Empty Answers: {wrongAnswersCount}</p>
                <a href="#">
                    Try Again <FontAwesomeIcon icon={faForward} onClick={handleTryAgain} />
                </a>
            </form>
        </>

    );
};

export default Quizzes;
