import React, {useEffect, useState} from "react";
import './footer.css';



const Footer = () => {
     const [year, setYear] = useState(new Date().getFullYear());

     useEffect(() => {
        setYear(new Date().getFullYear());
             }, []);

    return (
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="copyright">
                                <p>&copy; <span id="footerDate">{year}</span> All Rights Reserved by Fikri Yigit Vuranok</p>
                            </div>
                        </div>
                    </div>
                </div>
             </div>


)


}
export default Footer;