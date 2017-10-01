import React from "react";
import { Switch, Route } from 'react-router-dom';
import Header from "./Header";
import StarredRepositories from "./StarredRepositories";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import Penicillum from './../images/penicillium.jpg';

function App(){

  var myStyles = {
    backgroundImage: "url(" + Penicillum + ")",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
    position: "fixed",
    textShadow: "1px 1px #6BA099"
  }
  return (
    <div style={myStyles}>
    <Header/>
    <Switch>
      <Route exact path="/" component={Portfolio}/>
      <Route exact path="/cool_projects" component={StarredRepositories}/>
      <Route exact path="/resume" component={Resume}/>
    </Switch>
    </div>
  );
}

export default App;
