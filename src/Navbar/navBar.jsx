import React, { useState } from 'react';
import './navBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGamepad, faUserSecret, faFlaskVial } from '@fortawesome/free-solid-svg-icons';
import './loginRegisterSection';

const NavBar = () => {
    const [isLeftDivOpen, setLeftDivOpen] = useState(false);
    const [isRightDivOpen, setRightDivOpen] = useState(false);
    const [isIconVisible, setIsIconVisible] = useState(true);
    const [isLoginToggleOpen, setIsLoginToggleOpen] = useState(false);
    const [isRegisterToggleOpen, setIsRegisterToggleOpen] = useState(false);
    const [isGameToggleOpen, setIsGameToggleOpen] = useState(false);

    const handleLeftButtonClick = () => {
        setLeftDivOpen(!isLeftDivOpen);
        if (isLeftDivOpen) {
            setIsIconVisible(true);
        } else {
            setIsIconVisible(false);
        }

    };

    const handleRightButtonClick = () => {
        setRightDivOpen(!isRightDivOpen);
        if (isRightDivOpen) {
            setIsIconVisible(true);
        } else {
            setIsIconVisible(false);
        }
    };

    const handleLoginToggleOpen = () => {
        setIsLoginToggleOpen(!isLoginToggleOpen);
        };
    const handleRegisterToggleOpen = () => {
        setIsRegisterToggleOpen(!isRegisterToggleOpen);
        };
    const handleGameToggleOpen = () => {
        setIsGameToggleOpen(!isGameToggleOpen);
        };

    return (
        <nav id="navbar">
            <div className="container">
                <div className="row">
                    <div id="navbar_left" >
                        <button className="navbar-left-button" onClick={handleLeftButtonClick}>
                            {isIconVisible && (
                                <FontAwesomeIcon icon={faUser} spin size="lg" style={{ color: '#e6e9ef' }} />
                            )}
                            <div className={`col-6 ${isLeftDivOpen ? 'open' : ''}`}>
                                {isLeftDivOpen && (<div className="left-div">
                                    <ul id='left-toggle'>
                                        <li id='loginToggle' onClick={handleLoginToggleOpen}> <FontAwesomeIcon icon={faUser} size='lg' /> LOGIN </li>
                                        
                                        <li id='registerToggle' onClick={handleRegisterToggleOpen}><FontAwesomeIcon icon={faUserSecret} size='lg'/>  REGISTER </li>
                                    </ul>
                                </div>)}
                            </div>
                        </button>


                    </div>
                    <div id="navbar_right" >
                        <button className="navbar-right-button" onClick={handleRightButtonClick}>
                            {isIconVisible && (
                                <FontAwesomeIcon icon={faGamepad} spin size="lg" style={{ color: '#e6e9ef' }} />
                            )}
                            <div className={`col-6 ${isRightDivOpen ? 'open' : ''}`}>
                                {isRightDivOpen && <div className="right-div">
                                    <ul id='right-toggle'>
                                        <li id='quizzesToggle' onClick={handleGameToggleOpen}><FontAwesomeIcon icon={faFlaskVial} size='lg'/> QUIZZES
                                         </li>
                                        
                                    </ul>
                                </div>}
                            </div>
                        </button>


                    </div>
                </div>
            </div>
        </nav>
        
    );
};

export default NavBar;
