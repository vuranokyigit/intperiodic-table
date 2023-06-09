import React from 'react';
import './loginRegisterSection.css';

const LoginRegisterSection = ({isLoginToggleOpen, isRegisterToggleOpen, onClose}) => {
    
    
   return(
    <div class="offcanvas offcanvas-start bg-dark text-white" data-bs-backdrop="static" tabindex="-1"
        id="offCanvasRegisterId" aria-labelledby="offCanvasRegisterIdLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offCanvasRegisterIdLabel">LOGIN</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={onClose}></button>
        </div>
        <div class="offcanvas-body">
            <div>
                I will not clxsose if you click outside of me.
            </div>
        </div>
    </div>
   )
}
export default LoginRegisterSection;