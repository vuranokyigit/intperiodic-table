import React from 'react';
import './registerMan.css';



const RegisterMan = (props) => {
    return (
        <div className="offcanvas-header">
            <div className='box'>
                <h5 className="offcanvas-title" id="offCanvasRegisterIdLabel">
                    REGISTER
                </h5>
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                    onClick={props.handleClose}
                />
                <div className="offcanvas-body">
                    <div>
                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <div className="form-outline">
                                    <label className="form-label" htmlFor="firstName">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        className="form-control form-control-lg"
                                    />
                                </div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="form-outline">
                                    <label className="form-label" htmlFor="lastName">
                                        Middle Name
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        className="form-control form-control-lg"
                                    />
                                </div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="form-outline">
                                    <label className="form-label" htmlFor="lastName">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        className="form-control form-control-lg"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-4 pb-2">
                                <div className="form-outline">
                                    <label className="form-label" htmlFor="emailAddress">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="emailAddress"
                                        className="form-control form-control-lg"
                                    />
                                </div>
                            </div>
                            <div className="col-md-6 mb-4 pb-2">
                                <div className="form-outline">
                                    <label className="form-label" htmlFor="passwd_data">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        id="passwd"
                                        className="form-control form-control-lg"
                                        required=""
                                    />
                                    <label id="modal-login-warning" className="text-warning">
                                        <input
                                            id="modal-login-show-password"
                                            type="checkbox"
                                            onclick="myFunctionRegisterShowPasswd()"
                                        />{" "}
                                        Show Password
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4 pb-2">
                                <div className="form-outline">
                                    <label className="form-label" htmlFor="phoneNumber">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phoneNumber"
                                        className="form-control form-control-lg"
                                    />
                                </div>
                            </div>
                            
                        </div>


                    </div>
                    {props.content}
                </div>
            </div>

        </div>


    )



}

export default RegisterMan;
