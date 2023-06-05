import React from "react";
import "./App.css"
import IntPeriodicTable from "./intPeriodicTable";
import Navbar from "./navBar";

//##TITLE & DESCRIPTION
const App = () => {
    return (
        <div className="App">
            <Navbar />
            <h1>PERIODIC TABLE</h1>
            <IntPeriodicTable />
        </div>
    );
};

export default App;

