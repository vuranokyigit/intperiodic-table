import React, { useState } from "react";
import data from "../intPeriodicTableJSON.json";
import "./intPeriodicTable.css";
import ElementModal from "./elementModal";


const colorMapElements = {
    "noble gas": "#FFBC42",
    "alkaline earth metal": "#EC674E",
    "diatomic nonmetal": "#D81159",
    "alkali metal": "#8F2D56",
    "transition metal": "#58586B",
    "post-transition metal": "#218380",
    lanthanide: "#4AABAF",
    metalloid: "#73D2DE",
};

const IntPeriodicTable = () => {
    const [selectedElement, setSelectedElement] = useState(null);
    
    const handleElementClick = (intelement) => {
        setSelectedElement(intelement);
    };

    const handleCloseModal = () => {
        setSelectedElement(null);
    };
    
    

    return (
        <div className="periodic-table">
            {data.intelements.map((intelement) => (
                <div
                    className="intelement"
                    key={intelement.name}
                    style={{
                        gridColumn: intelement.xpos,
                        gridRow: intelement.ypos,
                        backgroundColor: colorMapElements[intelement.category],
                    }}
                    
                    onClick={() => handleElementClick(intelement)}
                >
                    <strong>{intelement.symbol}</strong>
                    <small className="number">{intelement.number}</small>
                    <small className="name">{intelement.name}</small>
                </div>
            ))}
            {selectedElement && (
                <ElementModal
                    intelement={selectedElement}
                    onClose={handleCloseModal}
                />
            )}
           
        </div>
    );
};

export default IntPeriodicTable;
