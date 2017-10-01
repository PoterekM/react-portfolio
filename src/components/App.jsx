import React from "react";
import { Switch, Route } from 'react-router-dom';
import Header from "./Header";
import StarredRepositories from "./StarredRepositories";
import Portfolio from "./Portfolio";
import Penicillum from './../images/penicillium.jpg';

function App(){

  var myStyles = {
    backgroundImage: "url(" + Penicillum + ")",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
    position: "fixed",
  }
  return (
    <div style={myStyles}>
    <Header/>
    <Switch>
      <Route exact path="/" component={Portfolio}/>
      <Route exact path="/cool_projects" component={StarredRepositories}/>
    </Switch>
    </div>
  );
}

export default App;
