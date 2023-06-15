import React, { useState, useRef, useEffect } from "react";
import ElementParameters from "../../intPeriodicTableJSON.json"
import './matchGame.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faTimes } from '@fortawesome/free-solid-svg-icons';
console.log(ElementParameters.intelements.map(intelements => intelements.name));
console.log(ElementParameters.intelements.map(intelements => intelements.symbol));

const MatchGame = (props) => {
    const Ref = useRef(null);
    const [timer, setTimer] = useState('00:00:00');

    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }
    const startTimer = (e) => {
        let { total, hours, minutes, seconds } = getTimeRemaining(e);
        if (total >= 0) {
            setTimer(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':' +
                (seconds > 9 ? seconds : '0' + seconds)
            );
        } else {
            clearInterval(Ref.current);
        }
    }
    const clearTimer = (e) => {
        setTimer('00:00:40');
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }
    const getDeadTime = () => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 40); // 40 saniye ekleyin
        return deadline;
    };
    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);
    const onClickReset = () => {
        clearTimer(getDeadTime());
    }
    const [elements, setElements] = useState([]);
    const [selectedElement, setSelectedElement] = useState(null);
    const [matchedElements, setMatchedElements] = useState([]);
    const [score, setScore] = useState(0);
  
    useEffect(() => {
      const randomElements = getRandomElements(ElementParameters.intelements, 10);
      setElements(randomElements);
    }, []);
  
    const getRandomElements = (elements, count) => {
      const shuffledElements = shuffleElements(elements);
      const randomElements = shuffledElements.slice(0, count);
      return randomElements;
    };
  
    const shuffleElements = (elements) => {
      const shuffled = [...elements];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };
  
    const handleDragStart = (event, element) => {
      event.dataTransfer.setData("text/plain", element.name);
      setSelectedElement(element);
    };
  
    const handleDragOver = (event) => {
      event.preventDefault();
    };
  
    const handleDrop = (event) => {
      event.preventDefault();
      const droppedElementName = event.dataTransfer.getData("text/plain");
      if (selectedElement.name === droppedElementName) {
        setScore(score + 1);
        setMatchedElements([...matchedElements, selectedElement]);
        setSelectedElement(null);
  
        if (score + 1 === elements.length) {
          alert('Congratulations! You matched all elements!');
          resetGame();
        }
      }
    };
  
    const resetGame = () => {
      const randomElements = getRandomElements(ElementParameters.intelements, 10);
      setElements(randomElements);
      setSelectedElement(null);
      setMatchedElements([]);
      setScore(0);
    };
  
    return (
      <div className="offcanvas-header">
        <form id='manipulatinSpanTagsLoginForm' action="#" method='get' autoComplete='on'>
          <div className="offcanvas-body">
            <div>
              <div id="matchGame_box" className="login-box">
                <button
                  type="button"
                  className="btn-close"
                  id='closeLoginButton'
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  onClick={props.handleClose}
                >
                  <FontAwesomeIcon id='closeIcon' icon={faTimes} style={{ color: "#03e9f4" }} />
                </button>
                <form action="">
                  <h2 id="timerCount-area">{timer}</h2>
                  <div className="game-board">
                    <div className="element-container">
                      {elements.map((element, index) => (
                        <div
                          key={index}
                          className={`element ${matchedElements.includes(element) ? 'matched' : ''}`}
                          draggable={!matchedElements.includes(element)}
                          onDragStart={(event) => handleDragStart(event, element)}
                        >
                          {element.symbol}
                        </div>
                      ))}
                    </div>
                    <div className="dropZone-area">
                    <div
                      className={`dropzone ${selectedElement ? 'active' : ''}`}
                      onDragOver={handleDragOver}
                      onDrop={handleDrop}
                    >
                      METAL
                    </div>
                    <div
                      className={`dropzone ${selectedElement ? 'active' : ''}`}
                      onDragOver={handleDragOver}
                      onDrop={handleDrop}
                    >
                      NON-METAL
                    </div>
                    
                  </div>
                    
                  </div>
                  <div className="score">
                    Score: {score}/{elements.length}
                  </div>
                  <a id="resetButton" onClick={resetGame}>Try Again</a>
                </form>
              </div>
            </div>
            {props.content}
          </div>
        </form>
      </div>
    );
  };
  
  export default MatchGame;