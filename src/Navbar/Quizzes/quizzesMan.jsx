import React, { useState } from "react";
import './quizzesMan.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import ProfTest from './profTest';
import NavBar from "../navBar";

const QuizzesMan = (props) => {
  const [isOpenProf, setIsOpenProf] = useState(false);

  const togglePopupProf = () => {
    setIsOpenProf(!isOpenProf);
  }

  return (
    <>
      {isOpenProf ? (
        <ProfTest content={null} handleClose={togglePopupProf} />
      ) : (
        <div className="offcanvas-header">
          <form id='registerManForm' action="#" method='get' autoComplete='on'>
            <div className="offcanvas-body">
              <div>
                <div className="login-box">
                  <button
                    type="button"
                    id='closeRegisterButton'
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                    onClick={props.handleClose}
                  >
                    <FontAwesomeIcon id='closeIcon' icon={faXmark} style={{ color: "#03e9f4" }} />
                  </button>
                  
                  <div id="form">
                    <a href='#' onClick={togglePopupProf}>
                      <span />
                      <span />
                      <span />
                      <span />
                      Proficiency Test
                    </a>
                  </div>
                  
                  <div id="form">
                    <a href='#'>
                      <span />
                      <span />
                      <span />
                      <span />
                      Match Game
                    </a>
                  </div>
                </div>
              </div>
              {props.content}
              <NavBar setOpenGames={props.setOpenGames} />
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default QuizzesMan;
