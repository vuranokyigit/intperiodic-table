import React from 'react';
import './registerMan.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';




const RegisterMan = (props) => {
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
                                ><FontAwesomeIcon id='closeIcon' icon={faXmark} style={{color: "#03e9f4",}} /></button>
                                <h2>Register</h2>
                                <form>
                                    <div className="user-box">
                                        <input type="text" name="" required="" />
                                        <label>Name</label>
                                    </div>
                                    <div className="user-box">
                                        <input type="text" name="" required="" />
                                        <label>Surname</label>
                                    </div>
                                    <div className="user-box">
                                        <input type="text" name="" required="" />
                                        <label>E-Mail</label>
                                    </div>
                                    <div className="user-box">
                                        <input type="password" name="" required="" />
                                        <label>Password</label>
                                    </div>
                                    <div className="user-box">
                                        <input type="text" placeholder='dd/mm/yyyy' name="" required="" />
                                        <label>Birthday</label>
                                    </div>

                                    <a href='#'>
                                        <span />
                                        <span />
                                        <span />
                                        <span />
                                        Save
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

export default RegisterMan;
