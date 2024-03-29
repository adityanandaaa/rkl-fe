import React, { Component } from "react";
import "./Navbar.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class Navbars extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Navbar className="navbar-contain" bg="dark" variant="dark">
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src="Logo.png"
                            className="d-inline-block align-top img-navbar"
                        />
                    </Navbar.Brand>
                    {/* <Nav className="mr-auto"> */}
                    <Nav.Link
                        className="text-navbar home-navbar"
                        href="#/about"
                    >
                        ABOUT
                    </Nav.Link>
                    <Nav.Link
                        className="text-navbar brands-navbar"
                        href="#/brand"
                    >
                        BRANDS
                    </Nav.Link>
                    <Nav.Link
                        className="text-navbar career-navbar"
                        href="#/career"
                    >
                        CAREER
                    </Nav.Link>

                    {/* </Nav> */}
                </Navbar>
            </div>
        );
    }
}

export default Navbars;
