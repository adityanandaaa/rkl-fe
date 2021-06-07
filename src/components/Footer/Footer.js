import React, { Component } from "react";
import "./Footer.css";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
class Footers extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <section class="section-class-footer">
                <img class="image-footer-logo" src="Logo.png"></img>
                <p class="desc-footer text-footer">
                    RKL is a Food and Beverage company incepted in 2010 with a
                    commitment to make great experience to denizens of Jakarta
                </p>
                <p class="email-footer text-footer">
                    <a
                        lass="email-footer text-footer"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="mailto:info@rklokal.com"
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        info@rklokal.com
                    </a>
                </p>
                <div class="link-column">
                    <div class="text-footer">
                        <a href="#/">
                            <p class="text-link home-text">Home</p>
                        </a>
                        <a href="#/brand">
                            <p class="text-link brand-text">Brand</p>
                        </a>
                        <a href="#/career">
                            <p class="text-link career-text">Career</p>
                        </a>
                    </div>
                    <div class="text-footer">
                        <a href="#/about">
                            <p class="text-link about-text">About</p>
                        </a>
                        <a href="#/">
                            <p class="text-link gallery-text">Gallery</p>
                        </a>
                        {/* <div class="footer-logo-socmed"> */}
                        <img
                            class="ig-footer-logo"
                            src="Instagram - White.png"
                        ></img>
                        <img
                            class="fb-footer-logo"
                            src="Facebook - White.png"
                        ></img>
                        {/* </div> */}
                    </div>
                    <div class="garis-footer"></div>
                    <p class="copyright-footer">©2021 RKL Group</p>
                </div>
            </section>
        );
    }
}

export default Footers;
