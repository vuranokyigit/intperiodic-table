import React from "react";
import "./elementModal.css";
import data from "./intPeriodicTableJSON.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


const ElementModal = ({ intelement, onClose }) => {
  const elementData = data.intelements.find(
    (element) => element.name === intelement.name
  );

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
        <FontAwesomeIcon icon={faXmark} />
        </button>
        <h2>{elementData.name}</h2>
        <p>Atomic Number: {elementData.number}</p>
        <p>Symbol: {elementData.symbol}</p>
        {/* Diğer bilgilerin devami */}
      </div>
    </div>
  );
};

export default ElementModal;
