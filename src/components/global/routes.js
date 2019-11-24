import React from "react";
import {  Route,  Switch} from "react-router-dom";

import Cubo from "../cubos/Cubo";
import Atributo from "../atributos/Atributo";

const AppRoutes = () => 
    <Switch>
        <Route path="/cubo" component={Cubo} />
        <Route path="/atributo" component={Atributo} />\
    </Switch>

export default AppRoutes;