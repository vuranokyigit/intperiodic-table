import React from "react";
import "./elementModal.css";
import data from "../intPeriodicTableJSON.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';



const ElementModal = ({ intelement, onClose, darkMode }) => {
  const elementData = data.intelements.find(
    (element) => element.name === intelement.name
  );

  return (
    <div className="modal-overlay">
      <div className={`modal-content ${darkMode ? "dark" : ""}`}>
        <button className="close-button" onClick={onClose}>
        <FontAwesomeIcon icon={faXmark} />
        </button>
        <h2>{elementData.name}({elementData.symbol})</h2>
        <p>Atomic Number: {elementData.number}</p>
        <p>Period: {elementData.period}</p>
        <p id="categoryElement">Category: {elementData.category}</p>
        <p>Electron Configuration:{elementData.electron_configuration}</p>
        <p>Phase:{elementData.phase}</p>
        <p>Appearance:{elementData.appearance}</p>
        <p>Discovered By:{elementData.discovered_by}</p>
        <p>Summary:{elementData.summary}</p>
      </div>
    </div>
  );
};

export default ElementModal;
