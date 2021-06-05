import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home.js";
import About from "./containers/About/About.js";

const Routes = (props) => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/" component={Home}></Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;
