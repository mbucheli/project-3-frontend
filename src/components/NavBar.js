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

  <ul class="sidenav" id="mobile-demo">
    <li><a href="sass.html">Sass</a></li>
    <li><a href="badges.html">Components</a></li>
    <li><a href="collapsible.html">JavaScript</a></li>
  </ul>
        </div>
    )
};

export default NavBar;