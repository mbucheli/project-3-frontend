import React from "react";
import ModalTimer from "./ModalTimer";
import { useState } from "react"

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
                        </li>
                        {openModal && <ModalTimer closeModal={setOpenModal} />}
                        {/* ModalCalendar is going to start here */}
                        <li className="tab"><a className="active" href="#test2">Calendar</a></li>
                    </ul>

                </div>
            </nav>

        </div>
    )
};

export default NavBar;