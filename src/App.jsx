import React, {useState} from "react";
import "./App.css"
import Navbar from "./Navbar/navBar";
import IntPeriodicTable from "./Main/intPeriodicTable";
import Footer from "./Footer/footer";
import BackTop from "./Main/backTop";



//##TITLE & DESCRIPTION
const App = () => {
    const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

    return (
        <div className={`App ${darkMode ? "dark" : ""}`} onClick={handleDarkModeToggle}>
            <Navbar />
            <div className="body-ui">
                <h1>PERIODIC TABLE</h1>
                <IntPeriodicTable />
                <BackTop />
                <Footer />
            </div>
        </div>
    );
};

export default App;

