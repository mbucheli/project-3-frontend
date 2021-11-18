import React from "react";

const NavBar = () => {
    return (
        <div>
            <nav class="nav-extended">
    <div class="nav-wrapper">
      <a href="/" class="brand-logo">Nurse Task</a>
    </div>
    <div class="nav-content">
      <ul class="tabs tabs-transparent">
        <li class="tab"><a href="#test1">Timer</a></li>
        <li class="tab"><a class="active" href="#test2">Calendar</a></li>
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