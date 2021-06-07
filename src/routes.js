import React from "react";
import { BrowserRouter, Route, Switch, HashRouter } from "react-router-dom";
import Home from "./containers/Home/Home.js";
import About from "./containers/About/About.js";
import Brand from "./containers/Brand/Brand.js";
import Career from "./containers/Career/Career.js";

// const Routes = (props) => (
//     <BrowserRouter>
//         <Switch>
//             <Route path="/about" component={About}></Route>
//             <Route exact path="/" component={Home}></Route>
//         </Switch>
//     </BrowserRouter>
// );

const Routes = (props) => (
    <HashRouter>
        <Route exact path="/brand" component={Brand}></Route>
        <Route exact path="/career" component={Career}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/" component={Home}></Route>
    </HashRouter>
);

export default Routes;
