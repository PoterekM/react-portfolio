import React from "react";
import { Switch, Route } from 'react-router-dom';
import Header from "./Header";
import StarredRepositories from "./StarredRepositories";
import Portfolio from "./Portfolio";

function App(){
  return (
    <div>
    <Header/>
    <Switch>
      <Route exact path="/" component={Portfolio}/>
      <Route exact path="/cool_projects" component={StarredRepositories}/>
    </Switch>
    </div>
  );
}

export default App;
