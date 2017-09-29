import React from "react";
import Header from "./Header";
import StarredRepositories from "./StarredRepositories";
import Portfolio from "./Portfolio";

function App(){
  return (
    <div>
      <Header/>
      <Portfolio/>
      <StarredRepositories/>
    </div>
  );
}

export default App;
