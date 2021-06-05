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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Eros, diam velit malesuada erat. Neque id urna nunc
                        tristique. Nunc, eget felis at ornare scelerisque at
                        condimentum dolor orci. Risus vel amet odio turpis purus
                        eget non netus vulputate. Viverra fermentum lobortis
                        integer arcu ullamcorper. Scelerisque purus id.
                    </p>
                    <button class="button-company-profile-text">
                        Download Company Profile
                    </button>
                </section>

                <section class="section-class-visi-misi-page">
                    <p class="visi-title visi-misi-title">Visi</p>
                    <p class="visi-text visi-misi-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nibh dolor elit faucibus non quis elit ipsum. Habitasse.
                    </p>
                    <div class="visi-misi-garis"></div>
                    <p class="misi-title visi-misi-title">Misi</p>
                    <p class="misi-text visi-misi-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis sed aliquam duis urna amet, consectetur. Pretium
                        commodo urna egestas non porttitor. Eget id augue leo
                        ullamcorper sagittis, habitant lobortis. Viverra aenean.
                    </p>
                </section>
                <section class="section-class-contact-details-page">
                    <p class="contact-details-text-page">Our Contact Details</p>
                    <div class="contact-details-garis-page"></div>
                    <div>
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
                                href="mailto:hello@rkl.co.id"
                                style={{
                                    textDecoration: "none",
                                }}
                            >
                                hello@rkl.co.id
                            </a>
                        </p>
                    </div>
                    <div>
                        <img
                            class="telfon-contact-details-logo"
                            src="Phone - Black.png"
                        ></img>
                        <p class="telfon-contact-details text-contact-details">
                            +62 222 0000
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
