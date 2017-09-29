import React from "react";
import StarredRepositories from "./StarredRepositories";
import Portfolio from "./Portfolio";

function Header () {

  return(
    <div>
      <h1>Username</h1>
      <h2>User Location</h2>
      <h4>Image of user</h4>
      <Portfolio/>
      <StarredRepositories/>
    </div>
  )

}

export default Header;
