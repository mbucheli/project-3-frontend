import React from "react";
import ModalTimer from "./ModalTimer";
import { useState } from "react"
import Calendar from "./Calendar";

function NavBar() {
    const [openModal, setOpenModal] = useState(false)

    return (
        <div>
            <nav className="nav-extended" style={{ backgroundColor: "teal", paddingBottom: "10px" }}>
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo" style={{ fontFamily: "Cambria" }}>Nurse Mern</a>
                    <p className="sidenav-trigger"><i className="material-icons">local_hospital</i></p>
                </div>
                <div className="nav-content" style={{ fontFamily: "Cambria" }}>
                    <ul className="tabs tabs-transparent">
                        <li className="tab">
                            <button className="openModalbtn" style={{ border: "none", background: "transparent" }} onClick={() => { setOpenModal(true) }}>
                                <i className="material-icons prefix">add_alarm</i>
                            </button>
                            {openModal && <ModalTimer closeModal={setOpenModal} />}
                        </li>
                        <li className="tab">
                            <a className="active" href="https://www.biometadata.com/" target="_blank" className="black-text"><i className="material-icons prefix">info</i></a>
                        </li>
                        <li className="tab">
                            
                        </li>
                    </ul>

                </div>
            </nav>

        </div>
    )
};

export default NavBar;