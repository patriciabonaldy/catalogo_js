import React from "react";
import {  Route,  Switch} from "react-router-dom";

import Cubo from "../cubos/Cubo";
import Atributo from "../atributos/Atributo";

const Home = () => {
    return (
      <h3>    </h3>
    );
  };
  const NoMatchPage = () => {
    return (
      <h3>404 - Not found</h3>
    );
  }; 

const AppRoutes = () => 
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cubo" component={Cubo} />
        <Route path="/atributo" component={Atributo} />
        <Route component={NoMatchPage} />
    </Switch>

export default AppRoutes;