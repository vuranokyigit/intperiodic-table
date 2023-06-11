import React from "react";
import "../Main/backTop.css";
import App from "../App";
//##FONT AWESOME##//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";


const BackTop = ({clickToggleDark, darkMode}) => {
        return (
            <div className={`backTopClass ${darkMode ? 'dark' : ''}`}>
                <i className="fa fa-angle-up" onClick={clickToggleDark} ><FontAwesomeIcon icon={faCircleHalfStroke} /></i>
            </div>
        )
    }

export default BackTop;