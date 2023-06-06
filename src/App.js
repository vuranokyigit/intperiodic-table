import React from "react";
import "./App.css"
import Navbar from "./navBar";
import IntPeriodicTable from "./intPeriodicTable";


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

