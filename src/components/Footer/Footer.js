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
                <p class="email-footer text-footer">hello@rkl.co.id</p>
                <div class="link-column">
                    <div class="text-footer">
                        <p class="text-link home-text">Home</p>
                        <p class="text-link brand-text">Brand</p>
                        <p class="text-link career-text">Career</p>
                    </div>
                    <div class="text-footer">
                        <p class="text-link about-text">About</p>
                        <p class="text-link gallery-text">Gallery</p>
                        {/* <div class="footer-logo-socmed"> */}
                        <img
                            class="ig-footer-logo"
                            src="Icon/Instagram - White.png"
                        ></img>
                        <img
                            class="fb-footer-logo"
                            src="Icon/Facebook - White.png"
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
