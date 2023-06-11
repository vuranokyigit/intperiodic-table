import React from "react";
import "../Main/backTop.css";
//##FONT AWESOME##//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";


const BackTop = () => {
        return (
            <div className="backTopClass" >
                <i className="fa fa-angle-up"><FontAwesomeIcon icon={faCircleHalfStroke} /></i>
            </div>
        )
    }

export default BackTop;