import React from 'react';
import './manipulatingSpanTagsLogin.css';


const ManipulatingSpanTags = (props) => {
    return (
        <div className="offcanvas-header">
            <div className='box'>
                <h5 className="offcanvas-title" id="offCanvasRegisterIdLabel">
                    LOGIN
                </h5>
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                    onClick={props.handleClose}
                />
                <form action="#" method='get' autoComplete='on'>
                    <div className="offcanvas-body">
                        <div><>
                            <label htmlFor="email_data">Email</label>
                            <input
                                type="email"
                                id="email_data"
                                name="email_data"
                                className="form-control"
                                placeholder="Text Your E-mail..."
                                required=""
                                autofocus=""
                            />
                            <label id="email_data_validation" className="text-warning">
                                E-mail Not Found
                            </label>
                            <label htmlFor="password_data">Password</label>
                            <input
                                type="password"
                                id="passwd_data"
                                name="passwd_data"
                                className="form-control"
                                placeholder="Text Your Password..."
                                required=""
                            />
                            <label id="passwd_data_validation" className="text-warning">
                                <input
                                    id="modal-login-show-password"
                                    type="checkbox"
                                    onclick="myFunctionShowPasswd()"
                                />
                                Show Password
                            </label>
                            <button type="reset" className="btn btn-danger">
                                Clear
                            </button>
                            <button type="submit" className="btn btn-primary" id="loginSubmitId">
                                Send
                            </button>
                        </></div>
                        {props.content}
                    </div>
                </form>
            </div>

        </div>


    )
}
export default ManipulatingSpanTags;