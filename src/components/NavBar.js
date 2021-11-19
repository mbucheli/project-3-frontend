import React from "react";

const NavBar = () => {
    return (
        <div>
            <nav className="nav-extended">
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo">Nurse Mern</a>
                    <p className="sidenav-trigger"><i className="material-icons">local_hospital</i></p>
                </div>
                <div className="nav-content">
                    <ul className="tabs tabs-transparent">
                        <li className="tab"><a href="#test1">Timer</a></li>
                        <li className="tab"><a className="active" href="#test2">Calendar</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
};

export default NavBar;