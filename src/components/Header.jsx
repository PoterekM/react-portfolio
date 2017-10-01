import React from "react";
import { Link } from 'react-router-dom';
import Asp from "./../images/AspergillusCLEISTOTHECIA.jpg"


function Header () {

  var headerStyle = {
    backgroundColor: "rgba(223, 149, 175, .4)",
  }

  return(
    <div style={headerStyle}>
      <h1>Michelle Poterek's Portfolio</h1>

    <Link to="/">About</Link> | <Link to="/cool_projects">Cool Projects I like</Link> | <Link to="/resume">Resume</Link>
    </div>
  )

}

export default Header;
