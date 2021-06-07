import React, { Component } from "react";
import { render } from "react-dom";
import "./Brand.css";

class Brand extends Component {
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
                <section class="section-class-comingsoon">
                    <img class="image-comingsoon" src="coming - soon.png"></img>
                </section>
            </div>
        );
    }
}

export default Brand;
