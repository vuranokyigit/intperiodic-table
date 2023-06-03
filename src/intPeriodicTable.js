
import React from "react";
import data from "./intPeriodicTableJSON.json";
import "./intPeriodicTable.css";
//##COLORS SETTINGS##

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
  //##ASSIGNMENT SETTINGS##
const IntPeriodicTable = () => {
    return (
        <div className="periodic-table">
            {data.intelements.map((intelement) => (
                <div className="intelement" key={intelement.name} style={{
                    gridColumn: intelement.xpos,//this givest he int element is a grid column
                    gridRow: intelement.ypos,//this gives the int element is a grid row
                    backgroundColor: colorMapElements[intelement.category],
                }}>
                    <strong>{intelement.symbol}</strong>
                    <small className="number">{intelement.number}</small>
                    <small className="name">{intelement.name}</small>
                </div>
            ))}
        </div>
    );
};

export default IntPeriodicTable;
