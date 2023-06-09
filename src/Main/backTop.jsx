import React, {useState} from "react";
import "../Main/backTop.css";
//##FONT AWESOME##//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";


const BackTop = () => {
    const [darkMode, setDarkMode] = useState(false);
  
    const handleClick = () => {
      setDarkMode(!darkMode);
    };
  
    return (
      <div className={`back-top ${darkMode ? 'dark' : 'light'}`} onClick={handleClick}>
        <i className="fa fa-angle-up"><FontAwesomeIcon icon={faCircleHalfStroke} /></i>
      </div>
    );
  };
  
  export default BackTop;