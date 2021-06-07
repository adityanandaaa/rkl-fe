import React, { Component } from "react";
import { render } from "react-dom";
import Gallery from "react-grid-gallery";
import "./About.css";

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        // document.body.style.background = "#000000";
        // var title = document.getElementById("nav-title");
        // title.innerHTML = "HOME";
    }

    render() {
        return (
            <div
                style={{
                    minHeight: "100%",
                    position: "relative",
                }}
            >
                <section class="section-class-about-page">
                    <div class="bg-for-aboutpage">
                        <img
                            class="image-aboutpage"
                            src="about-cover.jpg"
                        ></img>
                    </div>
                    <p class="text-aboutpage">ABOUT</p>
                </section>
                <section class="section-class-company-profile-page">
                    <p class="company-profiletext-aboutpage">
                        RKL is a Food and Beverage company incepted in 2010 with
                        a commitment to make great experience to denizens of
                        Jakarta
                    </p>
                    <button class="button-company-profile-text">
                        Download Company Profile
                    </button>
                </section>

                <section class="section-class-visi-misi-page">
                    <p class="visi-title visi-misi-title">Visi</p>
                    <p class="visi-text visi-misi-text">
                        Ruci Kebanggaan Lokal as a company that provides
                        contemporary lifestyle concept conforming Indonesian
                        culture
                    </p>
                    <div class="visi-misi-garis"></div>
                    <p class="misi-title visi-misi-title">Misi</p>
                    <ul class="misi-text visi-misi-text">
                        <li>
                            To retain outlets in big cities and tourism hotspots
                            in Indonesia
                        </li>
                        <li>
                            {" "}
                            Create strong brand awareness that suites to the
                            target market
                        </li>
                        <li>
                            Build prospective partnership with various business
                            upholding tourism sector
                        </li>
                        <li>
                            Build prospective partnership with various lifestyle
                            brand
                        </li>
                        <li>Implementing good corporate governance</li>
                    </ul>
                    <p class="misi-text visi-misi-text"></p>
                </section>
                <section class="section-class-contact-details-page">
                    <p class="contact-details-text-page">Our Contact Details</p>
                    <div class="contact-details-garis-page"></div>
                    <div class="email-contain-contact-details">
                        <img
                            class="mail-contact-details-logo"
                            src="Email - Black.png"
                        ></img>
                        <p
                        // class="email-contact-details"
                        >
                            <a
                                class="email-contact-details text-contact-details"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="mailto:info@rklokal.com"
                                style={{
                                    textDecoration: "none",
                                }}
                            >
                                info@rklokal.com
                            </a>
                        </p>
                    </div>
                    <div class="telfon-contain-contact-details">
                        <img
                            class="telfon-contact-details-logo"
                            src="Phone - Black.png"
                        ></img>
                        <p class="telfon-contact-details text-contact-details">
                            +62 821-6652-6245
                        </p>
                    </div>
                    <img
                        class="ig-contact-details-logo"
                        src="Instagram - Black.png"
                    ></img>
                    <img
                        class="fb-contact-details-logo"
                        src="Facebook - Black.png"
                    ></img>
                </section>
            </div>
        );
    }
}

export default About;
