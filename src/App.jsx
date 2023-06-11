import React, { useState } from "react";
import "./App.css"
import Navbar from "./Navbar/navBar";
import IntPeriodicTable from "./Main/intPeriodicTable";
import Footer from "./Footer/footer";
import BackTop from "./Main/backTop";




//##TITLE & DESCRIPTION
const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  function clickToggleDark() {
    setDarkMode(!darkMode);
  }


  return (
    <div className={`App ${darkMode ? 'dark' : ''}`} >
      <Navbar />
      <div className="body-ui">
        <h1>PERIODIC TABLE</h1>
        <IntPeriodicTable />
        <BackTop  clickToggleDark={clickToggleDark} darkMode={darkMode} />
        <Footer />
      </div>
    </div>
  );
};
export default App;


