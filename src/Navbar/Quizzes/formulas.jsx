import React from "react";
import './formulas.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
const Formulas = (props) => {

    return (
        <div className="offcanvas-header">
            <form id='manipulatinSpanTagsLoginForm' action="#" method='get' autoComplete='on'>
                <div className="offcanvas-body">
                    <div>
                        <>
                            <div id="login-box-formulas" className="login-box">
                                <button
                                    type="button"
                                    className="btn-close"
                                    id='closeLoginButton'
                                    data-bs-dismiss="offcanvas"
                                    aria-label="Close"
                                    onClick={props.handleClose}
                                >
                                    <FontAwesomeIcon id='closeIcon' icon={faXmark} style={{ color: "#03e9f4", }} /></button>
                                <div id="formulasText">
                                    <ul>
                                        <li>Atomic Mass Formula: Atomic mass (m) = atomic number (n) x atomic weight (A)</li>
                                        <li>Mole Formula: Atomic mass (m) = atomic number (n) x atomic weight (A)</li>
                                        <li>Molar Mass Formula:  Molar mass (M) = mass (m) / number of moles (n)</li>
                                        <li>pH Formula: pH = -log[H+]</li>
                                        <li>Molar Solution Formula:  Molar solution (n) = volume (V) x molar concentration (C)</li>
                                        <li>Chemical Reaction Formula:  A + B → C + D</li>
                                        <li>Ionic Bond Formula:Example: Na+ + Cl- → NaCl</li>
                                    </ul>
                                    <ul>
                                        <li>Boyle's Law: When temperature is constant, the pressure and volume of a gas are inversely proportional. P1V1 = P2V2</li>
                                        <li>Charles's Law: When pressure is constant, the volume and temperature of a gas are directly proportional. V1/T1 = V2/T2</li>
                                        <li>Gay-Lussac's Law: When volume is constant, the pressure and temperature of a gas are directly proportional. P1/T1 = P2/T2</li>                         
                                    </ul>
                                </div>


                            </div>
                        </>
                    </div>
                </div>
            </form>
        </div>

    )



}
export default Formulas;