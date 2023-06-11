import React from 'react';
import './manipulatingSpanTagsLogin.css';


const ManipulatingSpanTags = (props) => {
    return (
        <div
            className="offcanvas offcanvas-start bg-dark text-white"
            data-bs-backdrop="static"
            tabIndex={-1}
            id="offCanvasRegisterId"
            aria-labelledby="offCanvasRegisterIdLabel"
        >
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
                </div>
                <div className="offcanvas-body">
                    <div>I will not clxsose if you click outside of me.</div>
                    {props.content}
                </div>
            </div>
        </div>

    )
}
export default ManipulatingSpanTags;