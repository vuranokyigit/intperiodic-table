import React from "react";
import "./App.css"
import Navbar from "./Navbar/navBar";
import IntPeriodicTable from "./Main/intPeriodicTable";


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

