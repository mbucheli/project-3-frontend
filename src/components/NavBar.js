import React from "react";
import ModalTimer from "./TimerFiles/ModalTimer";
import ModalCalendar from "./CalendarFiles/ModalCalendar";
import { useState } from "react"


function NavBar() {
    const [openModalTimer, setOpenModalTimer] = useState(false);
    const [openModalCalendar, setOpenModalCalendar] = useState(false);

    return (
        <div>
            <nav className="nav-extended" style={{ backgroundColor: "teal", paddingBottom: "10px" }}>
                <div className="nav-wrapper">
                    <a href="/" style={{ fontFamily: "Cambria", fontSize: "25px", marginLeft: "-15px" }}>Nurse Mern</a>
                    <p className="sidenav-trigger"><i className="material-icons">local_hospital</i></p>
                </div>
                <div className="nav-content" style={{ fontFamily: "Cambria" }}>
                    <ul className="tabs tabs-transparent">
                        <li className="tab">
                            <button className="openModalbtn" style={{ border: "none", background: "teal", color: "black" }} onClick={() => { setOpenModalTimer(true) }}>
                                <i className="material-icons prefix">add_alarm</i>
                            </button>
                            {openModalTimer && <ModalTimer closeModalTimer={setOpenModalTimer} />}
                        </li>
                        <li className="tab">
                            <button className="openModalbtn" style={{ border: "none", background: "teal", marginLeft: "5px", marginRight: "-5px", color: "black" }} onClick={() => { setOpenModalCalendar(true) }}>
                                <i className="material-icons prefix">date_range</i>
                            </button>
                            {openModalCalendar && <ModalCalendar closeModalCalendar={setOpenModalCalendar} />}
                        </li>
                        <li className="tab">
                            <a className="active" href="https://www.biometadata.com/" target="_blank" className="black-text"><i className="material-icons prefix">info</i></a>
                        </li>
                        
                    </ul>

                </div>
            </nav>

        </div>
    );
};

export default NavBar;