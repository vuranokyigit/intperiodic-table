import React from "react";
import './quizzesMan.css';
//FONT AWESOME//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


const QuizzesMan = (props) => {

    return (
        <div className="offcanvas-header">
            <form id='registerManForm' action="#" method='get' autoComplete='on'>
                <div className="offcanvas-body">
                    <div>
                        <>
                            <div className="login-box">
                                <button
                                    type="button"
                                    id='closeRegisterButton'
                                    className="btn-close"
                                    data-bs-dismiss="offcanvas"
                                    aria-label="Close"
                                    onClick={props.handleClose}
                                ><FontAwesomeIcon id='closeIcon' icon={faXmark} style={{ color: "#03e9f4", }} /></button>
                                
                                <form action="">
                                    <div>
                                        <a href='#'>
                                            <span />
                                            <span />
                                            <span />
                                            <span />
                                            Match Game
                                        </a>
                                    </div>
                                </form>
                                <form action="">
                                    <div>
                                        <a href='#'>
                                            <span />
                                            <span />
                                            <span />
                                            <span />
                                            Proficiency Test
                                        </a>
                                    </div>
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

export default QuizzesMan;