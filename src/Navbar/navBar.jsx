import React, { useState } from 'react';
import './navBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGamepad, faUserSecret, faFlaskVial } from '@fortawesome/free-solid-svg-icons';
import ManipulatingSpanTagsLogin from './manipulatingSpanTagsLogin';
import RegisterMan from './registerMan';

const NavBar = (props) => {
    const [isLeftDivOpen, setLeftDivOpen] = useState(false);
    const [isRightDivOpen, setRightDivOpen] = useState(false);
    const [isIconVisible, setIsIconVisible] = useState(true);



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
    const [isOpen, setIsOpen] = useState(false);

    const togglePopupLogin = () => {
        setIsOpen(!isOpen);
    }
    const togglePopupRegister = () => {
        setIsOpen(!isOpen);
    }




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


                                        <li id='loginToggle'><FontAwesomeIcon icon={faUser} size='lg' /><span id='loginToggleSpan' onClick={togglePopupLogin} > LOGIN</span>  </li>


                                        <li id='registerToggle'><FontAwesomeIcon icon={faUserSecret} size='lg' /><span id='registerToggleSpan' onClick={togglePopupRegister}> REGISTER</span></li>

                                    </ul>

                                </div>)}

                            </div>
                        </button>
                        {isOpen && <ManipulatingSpanTagsLogin
                            content={<>
                               
                            </>}
                            handleClose={togglePopupLogin}
                        />}

                        {isOpen && <RegisterMan
                            content={<>
                                
                            </>}
                            handleClose={togglePopupRegister}
                        />}






                    </div>
                    <div id="navbar_right" >
                        <button className="navbar-right-button" onClick={handleRightButtonClick}>
                            {isIconVisible && (
                                <FontAwesomeIcon icon={faGamepad} spin size="lg" style={{ color: '#e6e9ef' }} />
                            )}
                            <div className={`col-6 ${isRightDivOpen ? 'open' : ''}`}>
                                {isRightDivOpen && <div className="right-div">
                                    <ul id='right-toggle'>
                                        <li id='quizzesToggle'><FontAwesomeIcon icon={faFlaskVial} size='lg' /> QUIZZES
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
