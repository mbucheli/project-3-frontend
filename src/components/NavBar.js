import React from "react";

const NavBar = () => {
    return (
        <div>
            <nav className="nav-extended" style={{ backgroundColor: "teal"}}>
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo" style={{ fontFamily: "Cambria"}}>Nurse Mern</a>
                    <p className="sidenav-trigger"><i className="material-icons">local_hospital</i></p>
                </div>
                <div className="nav-content" style={{ fontFamily: "Cambria"}}>
                    <ul className="tabs tabs-transparent">
                        <li className="tab"><a className="active" href="#test1">Timer</a></li>
                        <li className="tab"><a className="active" href="#test2">Calendar</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
};

export default NavBar;