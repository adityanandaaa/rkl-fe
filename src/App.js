// import React, { useState, useEffect } from "react";
import React from "react";

import "./App.css";
import Navbars from "./components/Navbar/Navbar.js";
import Footers from "./components/Footer/Footer.js";

import Router from "./routes";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Navbars />
            </header>

            <Router />
            <Footers />
        </div>
    );
}

export default App;
