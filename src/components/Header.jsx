import React from "react";
import { Link } from 'react-router-dom';


function Header () {

  return(
    <div>
      <h1>Michelle Poterek's Portfolio</h1>
    <Link to="/">Portfolio</Link> | <Link to="/cool_projects">Cool Projects</Link>
    </div>
  )

}

export default Header;
