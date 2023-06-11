import React from 'react';
import './manipulatingSpanTagsLogin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


const ManipulatingSpanTags = (props) => {
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
                                    ><FontAwesomeIcon  id='closeIcon' icon={faXmark} style={{color: "#03e9f4",}} /></button>
                                <h2>Login</h2>
                                <form>
                                    <div className="user-box">
                                        <input type="text" name="" required="" />
                                        <label>E-Mail</label>
                                    </div>
                                    <div className="user-box">
                                        <input type="password" name="" required="" />
                                        <label>Password</label>
                                    </div>
                                    <a href='#'>
                                        <span />
                                        <span />
                                        <span />
                                        <span />
                                        Submit
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
export default ManipulatingSpanTags;