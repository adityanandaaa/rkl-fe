import React, { Component } from "react";
import { render } from "react-dom";
import Gallery from "react-grid-gallery";
import "./Home.css";
// import Footers from "./components/Footer/Footer.js";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import Footers from "../components/Footer/Footer.js";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
};

const IMAGES = [
    {
        src: "gallery - 1.jpg",
        thumbnail: "gallery - 1.jpg",
        thumbnailWidth: 288,
        thumbnailHeight: 216,
    },
    {
        src: "gallery - 2.jpg",
        thumbnail: "gallery - 2.jpg",
        thumbnailWidth: 288,
        thumbnailHeight: 216,
    },
    {
        src: "gallery - 3.jpg",
        thumbnail: "gallery - 3.jpg",
        thumbnailWidth: 288,
        thumbnailHeight: 216,
    },
    {
        src: "gallery - 4.jpg",
        thumbnail: "gallery - 4.jpg",
        thumbnailWidth: 288,
        thumbnailHeight: 216,
    },
    {
        src: "gallery - 5.jpg",
        thumbnail: "gallery - 5.jpg",
        thumbnailWidth: 288,
        thumbnailHeight: 216,
    },

    {
        src: "gallery - 6.jpg",
        thumbnail: "gallery - 6.jpg",
        thumbnailWidth: 288,
        thumbnailHeight: 216,
    },
    {
        src: "gallery - 7.jpg",
        thumbnail: "gallery - 7.jpg",
        thumbnailWidth: 288,
        thumbnailHeight: 216,
    },
    {
        src: "gallery - 8.jpg",
        thumbnail: "gallery - 8.jpg",
        thumbnailWidth: 288,
        thumbnailHeight: 216,
    },
    {
        src: "gallery - 9.jpg",
        thumbnail: "gallery - 9.jpg",
        thumbnailWidth: 288,
        thumbnailHeight: 216,
    },
    {
        src: "/gallery - 10.jpg",
        thumbnail: "gallery - 10.jpg",
        thumbnailWidth: 288,
        thumbnailHeight: 216,
    },
];

const IMAGESandro = [
    {
        src: "gallery - 1.jpg",
        thumbnail: "gallery - 1.jpg",
        thumbnailWidth: 100,
        thumbnailHeight: 100,
    },
    {
        src: "gallery - 2.jpg",
        thumbnail: "gallery - 2.jpg",
        thumbnailWidth: 100,
        thumbnailHeight: 100,
    },
    {
        src: "gallery - 3.jpg",
        thumbnail: "gallery - 3.jpg",
        thumbnailWidth: 100,
        thumbnailHeight: 100,
    },
    {
        src: "gallery - 4.jpg",
        thumbnail: "gallery - 4.jpg",
        thumbnailWidth: 100,
        thumbnailHeight: 100,
    },
    {
        src: "gallery - 5.jpg",
        thumbnail: "gallery - 5.jpg",
        thumbnailWidth: 100,
        thumbnailHeight: 100,
    },

    {
        src: "gallery - 6.jpg",
        thumbnail: "gallery - 6.jpg",
        thumbnailWidth: 100,
        thumbnailHeight: 100,
    },
    {
        src: "gallery - 7.jpg",
        thumbnail: "gallery - 7.jpg",
        thumbnailWidth: 100,
        thumbnailHeight: 100,
    },
    {
        src: "gallery - 8.jpg",
        thumbnail: "gallery - 8.jpg",
        thumbnailWidth: 100,
        thumbnailHeight: 100,
    },
    {
        src: "gallery - 9.jpg",
        thumbnail: "gallery - 9.jpg",
        thumbnailWidth: 100,
        thumbnailHeight: 100,
    },
    {
        src: "gallery - 10.jpg",
        thumbnail: "gallery - 10.jpg",
        thumbnailWidth: 100,
        thumbnailHeight: 100,
    },
];

const IMAGESiphone678 = [
    {
        src: "gallery - 1.jpg",
        thumbnail: "gallery - 1.jpg",
        thumbnailWidth: 185,
        thumbnailHeight: 100,
    },
    {
        src: "gallery - 2.jpg",
        thumbnail: "gallery - 2.jpg",
        thumbnailWidth: 185,
        thumbnailHeight: 100,
    },
    {
        src: "gallery - 3.jpg",
        thumbnail: "gallery - 3.jpg",
        thumbnailWidth: 185,
        thumbnailHeight: 100,
    },
    {
        src: "gallery - 4.jpg",
        thumbnail: "gallery - 4.jpg",
        thumbnailWidth: 185,
        thumbnailHeight: 100,
    },
    {
        src: "gallery - 5.jpg",
        thumbnail: "gallery - 5.jpg",
        thumbnailWidth: 185,
        thumbnailHeight: 100,
    },

    {
        src: "gallery - 6.jpg",
        thumbnail: "gallery - 6.jpg",
        thumbnailWidth: 185,
        thumbnailHeight: 100,
    },
    {
        src: "gallery - 7.jpg",
        thumbnail: "gallery - 7.jpg",
        thumbnailWidth: 185,
        thumbnailHeight: 100,
    },
    {
        src: "gallery - 8.jpg",
        thumbnail: "gallery - 8.jpg",
        thumbnailWidth: 185,
        thumbnailHeight: 100,
    },
    {
        src: "gallery - 9.jpg",
        thumbnail: "gallery - 9.jpg",
        thumbnailWidth: 185,
        thumbnailHeight: 100,
    },
    {
        src: "gallery - 10.jpg",
        thumbnail: "gallery - 10.jpg",
        thumbnailWidth: 185,
        thumbnailHeight: 100,
    },
];

const IMAGESiphone12 = [
    {
        src: "gallery - 1.jpg",
        thumbnail: "gallery - 1.jpg",
        thumbnailWidth: 195,
        thumbnailHeight: 100,
    },
    {
        src: "gallery - 2.jpg",
        thumbnail: "gallery - 2.jpg",
        thumbnailWidth: 195,
        thumbnailHeight: 100,
    },
    {
        src: "gallery - 3.jpg",
        thumbnail: "gallery - 3.jpg",
        thumbnailWidth: 195,
        thumbnailHeight: 100,
    },
    {
        src: "gallery - 4.jpg",
        thumbnail: "gallery - 4.jpg",
        thumbnailWidth: 195,
        thumbnailHeight: 100,
    },
    {
        src: "gallery - 5.jpg",
        thumbnail: "gallery - 5.jpg",
        thumbnailWidth: 195,
        thumbnailHeight: 100,
    },

    {
        src: "gallery - 6.jpg",
        thumbnail: "gallery - 6.jpg",
        thumbnailWidth: 195,
        thumbnailHeight: 100,
    },
    {
        src: "gallery - 7.jpg",
        thumbnail: "gallery - 7.jpg",
        thumbnailWidth: 195,
        thumbnailHeight: 100,
    },
    {
        src: "gallery - 8.jpg",
        thumbnail: "gallery - 8.jpg",
        thumbnailWidth: 195,
        thumbnailHeight: 100,
    },
    {
        src: "gallery - 9.jpg",
        thumbnail: "gallery - 9.jpg",
        thumbnailWidth: 195,
        thumbnailHeight: 100,
    },
    {
        src: "gallery - 10.jpg",
        thumbnail: "gallery - 10.jpg",
        thumbnailWidth: 195,
        thumbnailHeight: 100,
    },
];

const IMAGESiphone678plus = [
    {
        src: "gallery - 1.jpg",
        thumbnail: "gallery - 1.jpg",
        thumbnailWidth: 207,
        thumbnailHeight: 100,
    },
    {
        src: "gallery - 2.jpg",
        thumbnail: "gallery - 2.jpg",
        thumbnailWidth: 207,
        thumbnailHeight: 100,
    },
    {
        src: "gallery - 3.jpg",
        thumbnail: "gallery - 3.jpg",
        thumbnailWidth: 207,
        thumbnailHeight: 100,
    },
    {
        src: "gallery - 4.jpg",
        thumbnail: "gallery - 4.jpg",
        thumbnailWidth: 207,
        thumbnailHeight: 100,
    },
    {
        src: "gallery - 5.jpg",
        thumbnail: "gallery - 5.jpg",
        thumbnailWidth: 207,
        thumbnailHeight: 100,
    },

    {
        src: "gallery - 6.jpg",
        thumbnail: "gallery - 6.jpg",
        thumbnailWidth: 207,
        thumbnailHeight: 100,
    },
    {
        src: "gallery - 7.jpg",
        thumbnail: "gallery - 7.jpg",
        thumbnailWidth: 207,
        thumbnailHeight: 100,
    },
    {
        src: "gallery - 8.jpg",
        thumbnail: "gallery - 8.jpg",
        thumbnailWidth: 207,
        thumbnailHeight: 100,
    },
    {
        src: "gallery - 9.jpg",
        thumbnail: "gallery - 9.jpg",
        thumbnailWidth: 207,
        thumbnailHeight: 100,
    },
    {
        src: "gallery - 10.jpg",
        thumbnail: "gallery - 10.jpg",
        thumbnailWidth: 207,
        thumbnailHeight: 100,
    },
];

const IMAGESiphone12promax = [
    {
        src: "gallery - 1.jpg",
        thumbnail: "gallery - 1.jpg",
        thumbnailWidth: 207,
        thumbnailHeight: 100,
    },
    {
        src: "gallery - 2.jpg",
        thumbnail: "gallery - 2.jpg",
        thumbnailWidth: 207,
        thumbnailHeight: 100,
    },
    {
        src: "gallery - 3.jpg",
        thumbnail: "gallery - 3.jpg",
        thumbnailWidth: 207,
        thumbnailHeight: 100,
    },
    {
        src: "gallery - 4.jpg",
        thumbnail: "gallery - 4.jpg",
        thumbnailWidth: 207,
        thumbnailHeight: 100,
    },
    {
        src: "gallery - 5.jpg",
        thumbnail: "gallery - 5.jpg",
        thumbnailWidth: 207,
        thumbnailHeight: 100,
    },

    {
        src: "gallery - 6.jpg",
        thumbnail: "gallery - 6.jpg",
        thumbnailWidth: 207,
        thumbnailHeight: 100,
    },
    {
        src: "gallery - 7.jpg",
        thumbnail: "gallery - 7.jpg",
        thumbnailWidth: 207,
        thumbnailHeight: 100,
    },
    {
        src: "gallery - 8.jpg",
        thumbnail: "gallery - 8.jpg",
        thumbnailWidth: 207,
        thumbnailHeight: 100,
    },
    {
        src: "gallery - 9.jpg",
        thumbnail: "gallery - 9.jpg",
        thumbnailWidth: 207,
        thumbnailHeight: 100,
    },
    {
        src: "gallery - 10.jpg",
        thumbnail: "gallery - 10.jpg",
        thumbnailWidth: 207,
        thumbnailHeight: 100,
    },
];

const IMAGES1280 = [
    {
        src: "gallery - 1.jpg",
        thumbnail: "gallery - 1.jpg",
        thumbnailWidth: 288,
        thumbnailHeight: 216,
    },
    {
        src: "gallery - 2.jpg",
        thumbnail: "gallery - 2.jpg",
        thumbnailWidth: 288,
        thumbnailHeight: 216,
    },
    {
        src: "gallery - 3.jpg",
        thumbnail: "gallery - 3.jpg",
        thumbnailWidth: 288,
        thumbnailHeight: 216,
    },
    {
        src: "gallery - 4.jpg",
        thumbnail: "gallery - 4.jpg",
        thumbnailWidth: 288,
        thumbnailHeight: 216,
    },
    {
        src: "gallery - 5.jpg",
        thumbnail: "gallery - 5.jpg",
        thumbnailWidth: 288,
        thumbnailHeight: 216,
    },

    {
        src: "gallery - 6.jpg",
        thumbnail: "gallery - 6.jpg",
        thumbnailWidth: 288,
        thumbnailHeight: 216,
    },
    {
        src: "gallery - 7.jpg",
        thumbnail: "gallery - 7.jpg",
        thumbnailWidth: 288,
        thumbnailHeight: 216,
    },
    {
        src: "gallery - 8.jpg",
        thumbnail: "gallery - 8.jpg",
        thumbnailWidth: 288,
        thumbnailHeight: 216,
    },
    {
        src: "gallery - 9.jpg",
        thumbnail: "gallery - 9.jpg",
        thumbnailWidth: 288,
        thumbnailHeight: 216,
    },
    {
        src: "/gallery - 10.jpg",
        thumbnail: "gallery - 10.jpg",
        thumbnailWidth: 288,
        thumbnailHeight: 216,
    },
];

const IMAGES1536 = [
    {
        src: "gallery - 1.jpg",
        thumbnail: "gallery - 1.jpg",
        thumbnailWidth: 288,
        thumbnailHeight: 216,
    },
    {
        src: "gallery - 2.jpg",
        thumbnail: "gallery - 2.jpg",
        thumbnailWidth: 288,
        thumbnailHeight: 216,
    },
    {
        src: "gallery - 3.jpg",
        thumbnail: "gallery - 3.jpg",
        thumbnailWidth: 288,
        thumbnailHeight: 216,
    },
    {
        src: "gallery - 4.jpg",
        thumbnail: "gallery - 4.jpg",
        thumbnailWidth: 288,
        thumbnailHeight: 216,
    },
    {
        src: "gallery - 5.jpg",
        thumbnail: "gallery - 5.jpg",
        thumbnailWidth: 288,
        thumbnailHeight: 216,
    },

    {
        src: "gallery - 6.jpg",
        thumbnail: "gallery - 6.jpg",
        thumbnailWidth: 288,
        thumbnailHeight: 216,
    },
    {
        src: "gallery - 7.jpg",
        thumbnail: "gallery - 7.jpg",
        thumbnailWidth: 288,
        thumbnailHeight: 216,
    },
    {
        src: "gallery - 8.jpg",
        thumbnail: "gallery - 8.jpg",
        thumbnailWidth: 288,
        thumbnailHeight: 216,
    },
    {
        src: "gallery - 9.jpg",
        thumbnail: "gallery - 9.jpg",
        thumbnailWidth: 288,
        thumbnailHeight: 216,
    },
    {
        src: "/gallery - 10.jpg",
        thumbnail: "gallery - 10.jpg",
        thumbnailWidth: 288,
        thumbnailHeight: 216,
    },
];

const IMAGES1600 = [
    {
        src: "gallery - 1.jpg",
        thumbnail: "gallery - 1.jpg",
        thumbnailWidth: 288,
        thumbnailHeight: 216,
    },
    {
        src: "gallery - 2.jpg",
        thumbnail: "gallery - 2.jpg",
        thumbnailWidth: 288,
        thumbnailHeight: 216,
    },
    {
        src: "gallery - 3.jpg",
        thumbnail: "gallery - 3.jpg",
        thumbnailWidth: 288,
        thumbnailHeight: 216,
    },
    {
        src: "gallery - 4.jpg",
        thumbnail: "gallery - 4.jpg",
        thumbnailWidth: 288,
        thumbnailHeight: 216,
    },
    {
        src: "gallery - 5.jpg",
        thumbnail: "gallery - 5.jpg",
        thumbnailWidth: 288,
        thumbnailHeight: 216,
    },

    {
        src: "gallery - 6.jpg",
        thumbnail: "gallery - 6.jpg",
        thumbnailWidth: 288,
        thumbnailHeight: 216,
    },
    {
        src: "gallery - 7.jpg",
        thumbnail: "gallery - 7.jpg",
        thumbnailWidth: 288,
        thumbnailHeight: 216,
    },
    {
        src: "gallery - 8.jpg",
        thumbnail: "gallery - 8.jpg",
        thumbnailWidth: 288,
        thumbnailHeight: 216,
    },
    {
        src: "gallery - 9.jpg",
        thumbnail: "gallery - 9.jpg",
        thumbnailWidth: 288,
        thumbnailHeight: 216,
    },
    {
        src: "/gallery - 10.jpg",
        thumbnail: "gallery - 10.jpg",
        thumbnailWidth: 288,
        thumbnailHeight: 216,
    },
];

class Home extends Component {
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
                <section
                    class="section-class-home-page"
                    style={{
                        backgroundImage: "url(mainbanner.jpg)",
                        backgroundSize: "cover",
                    }}
                >
                    <div class="bg-for-homepage">
                        {/* <img
                            class="image-homepage"
                            src="mainbanner.jpg"
                        ></img> */}
                    </div>
                    <div class="text-homepage-contain">
                        <p class="textbox-homepage">
                            RKL is a Food and Beverage company incepted in 2010
                            with a commitment to make great experience to
                            denizens of Jakarta
                        </p>
                    </div>
                    {/* </section> */}
                    {/* <section class="section-class-brand"> */}
                    {/* <img class="image-homepage" src="mainbanner.jpg"></img> */}
                    <div class="flip-card contain-brand1 ">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img
                                    class="image-brand1"
                                    src="brands - 1.png"
                                ></img>
                                {/* <p class="text-brand">Cafe Ruci</p> */}
                            </div>
                            <div class="flip-card-back">
                                <a
                                    class=""
                                    href="https://www.instagram.com/caferuci/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        class="image-brand-flip1"
                                        src="brands - 6.png"
                                    ></img>
                                </a>
                                {/* <p class="text-brand-flip">Cafe Ruci</p>
                                <p class="text-alamat">
                                    Jl. Suryo Blk. S No.49, Rw. Bar., Kec. Kby.
                                    Baru, Kota Jakarta Selatan, Daerah Khusus
                                    Ibukota Jakarta 12180
                                </p> */}
                                {/* <a
                                    class="ig-brand"
                                    href="https://www.instagram.com/caferuci/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        class="ig-brand-logo"
                                        src="Instagram - White.png"
                                    ></img>
                                </a> */}

                                {/* <img class="next-brand" src="Frame.png"></img> */}
                            </div>
                        </div>
                    </div>

                    <div class="flip-card contain-brand2 ">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img
                                    class="image-brand2"
                                    src="brands - 2.png"
                                ></img>
                                {/* <p class="text-brand">RUCI's Joint</p> */}
                            </div>
                            <div class="flip-card-back">
                                <img
                                    class="image-brand-flip2"
                                    src="brands - 7.png"
                                ></img>
                                {/* <p class="text-brand-flip">RUCI's Joint</p>
                                <p class="text-alamat">
                                    Jl. Suryo Blk. S No.49, Rw. Bar., Kec. Kby.
                                    Baru, Kota Jakarta Selatan, Daerah Khusus
                                    Ibukota Jakarta 12180
                                </p> */}

                                {/* <img
                                    class="ig-brand"
                                    src="Instagram - White.png"
                                ></img> */}
                                {/* <img class="next-brand" src="Frame.png"></img> */}
                            </div>
                        </div>
                    </div>

                    <div class="flip-card contain-brand3 ">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img
                                    class="image-brand3"
                                    src="brands - 3.png"
                                ></img>
                                {/* <p class="text-brand">Warget</p> */}
                            </div>
                            <div class="flip-card-back">
                                <a
                                    class=""
                                    href="https://www.instagram.com/wargetbahagia/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        class="image-brand-flip3"
                                        src="brands - 8.png"
                                    ></img>
                                </a>
                                {/* <p class="text-brand-flip">Warget</p>
                                <p class="text-alamat">
                                    Jl. Suryo Blk. S No.49, Rw. Bar., Kec. Kby.
                                    Baru, Kota Jakarta Selatan, Daerah Khusus
                                    Ibukota Jakarta 12180
                                </p> */}
                                {/* <a
                                    class="ig-brand"
                                    href="https://www.instagram.com/wargetbahagia/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        class="ig-brand-logo"
                                        src="Instagram - White.png"
                                    ></img>
                                </a> */}
                                {/* <img class="next-brand" src="Frame.png"></img> */}
                            </div>
                        </div>
                    </div>

                    <div class="flip-card contain-brand4 ">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img
                                    class="image-brand4"
                                    src="brands - 4.png"
                                ></img>
                                {/* <p class="text-brand">123</p> */}
                            </div>
                            <div class="flip-card-back">
                                <img
                                    class="image-brand-flip4"
                                    src="brands - 9.png"
                                ></img>
                                {/* <p class="text-brand-flip">123</p>
                                <p class="text-alamat">
                                    Jl. Suryo Blk. S No.49, Rw. Bar., Kec. Kby.
                                    Baru, Kota Jakarta Selatan, Daerah Khusus
                                    Ibukota Jakarta 12180
                                </p> */}
                                {/* <img
                                    class="ig-brand"
                                    src="Instagram - White.png"
                                ></img> */}
                                {/* <img class="next-brand" src="Frame.png"></img> */}
                            </div>
                        </div>
                    </div>

                    <div class="flip-card contain-brand5 ">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img
                                    class="image-brand5"
                                    src="brands - 5.png"
                                ></img>
                                {/* <p class="text-brand">Rararamenbar</p> */}
                            </div>
                            <div class="flip-card-back">
                                <a
                                    class=""
                                    href="https://www.instagram.com/rararamenbar/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        class="image-brand-flip5"
                                        src="brands - 10.png"
                                    ></img>
                                </a>
                                {/* <p class="text-brand-flip">Rararamenbar</p>
                                <p class="text-alamat">
                                    Jl. Suryo Blk. S No.49, Rw. Bar., Kec. Kby.
                                    Baru, Kota Jakarta Selatan, Daerah Khusus
                                    Ibukota Jakarta 12180
                                </p> */}
                                {/* <a
                                    class="ig-brand"
                                    href="https://www.instagram.com/rararamenbar/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        class="ig-brand-logo"
                                        src="Instagram - White.png"
                                    ></img>
                                </a> */}
                                {/* <img class="next-brand" src="Frame.png"></img> */}
                            </div>
                        </div>
                    </div>
                </section>

                <section class="section-class-event">
                    <p class="event-promo-title">EVENT & PROMO</p>

                    {/* <img class="image-comingsoon" src="coming - soon.png"></img> */}

                    <div class="garis-event"></div>
                    <div class="carousel-event-promo">
                        <Carousel
                            swipeable={false}
                            draggable={false}
                            showDots={false}
                            responsive={responsive}
                            ssr={true} // means to render carousel on server-side.
                            infinite={false}
                            // autoPlay={
                            //     this.props.deviceType !== "mobile" ? true : false
                            // }
                            autoPlay={false}
                            autoPlaySpeed={1000}
                            keyBoardControl={true}
                            customTransition="all .5"
                            transitionDuration={500}
                            containerClass="carousel-container"
                            // removeArrowOnDeviceType={["tablet", "mobile"]}
                            deviceType={this.props.deviceType}
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px"
                        >
                            <div class="card-event-promo">
                                <img
                                    class="image-event-promo"
                                    src="event - 1.jpeg"
                                ></img>
                                <div class="text-event-promo">
                                    <p class="event-promo-subtitle">
                                        WE ARE OPEN
                                    </p>
                                    <p class="event-promo-brand">Cafe Ruci</p>
                                    <p class="event-promo-date">2021</p>
                                </div>
                            </div>
                            <div class="card-event-promo">
                                <img
                                    class="image-event-promo"
                                    src="event - 2.jpeg"
                                ></img>
                                <div class="text-event-promo">
                                    <p class="event-promo-subtitle">
                                        WE ARE OPEN
                                    </p>
                                    <p class="event-promo-brand">Cafe Ruci</p>
                                    <p class="event-promo-date">2021</p>
                                </div>
                            </div>
                            <div class="card-event-promo">
                                <img
                                    class="image-event-promo"
                                    src="event - 3.jpeg"
                                ></img>
                                <div class="text-event-promo">
                                    <p class="event-promo-subtitle">
                                        SPECIAL PRICE KAWA KAWA
                                    </p>
                                    <p class="event-promo-brand">
                                        Rararamenbar
                                    </p>
                                    <p class="event-promo-date">2021</p>
                                </div>
                            </div>
                            <div class="card-event-promo">
                                <img
                                    class="image-event-promo"
                                    src="event - 4.jpeg"
                                ></img>
                                <div class="text-event-promo">
                                    <p class="event-promo-subtitle">
                                        FAMILY MEALS
                                    </p>
                                    <p class="event-promo-brand">
                                        Rararamenbar
                                    </p>
                                    <p class="event-promo-date">2021</p>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </section>
                <section class="section-class-gallery">
                    <p class="gallery-title">GALLERY</p>
                    {/* <img class="image-comingsoon" src="coming - soon.png"></img> */}
                    <div class="garis-gallery"></div>
                    <div class="gallery-row-andro">
                        <Gallery
                            images={IMAGESandro}
                            backdropClosesModal={true}
                            showImageCount={false}
                            enableImageSelection={false}
                            margin={0}
                            maxRows={10}
                            // rowHeight={220}
                            id={"test122"}
                            // tagStyle={test1}
                        />
                    </div>{" "}
                    <div class="gallery-row-iphone678">
                        <Gallery
                            images={IMAGESiphone678}
                            backdropClosesModal={true}
                            showImageCount={false}
                            enableImageSelection={false}
                            margin={0}
                            maxRows={10}
                            // rowHeight={220}
                            id={"test122"}
                            // tagStyle={test1}
                        />
                    </div>
                    <div class="gallery-row-iphone12">
                        <Gallery
                            images={IMAGESiphone12}
                            backdropClosesModal={true}
                            showImageCount={false}
                            enableImageSelection={false}
                            margin={0}
                            maxRows={10}
                            // rowHeight={220}
                            id={"test122"}
                            // tagStyle={test1}
                        />
                    </div>
                    <div class="gallery-row-iphone678plus">
                        <Gallery
                            images={IMAGESiphone678plus}
                            backdropClosesModal={true}
                            showImageCount={false}
                            enableImageSelection={false}
                            margin={0}
                            maxRows={10}
                            rowHeight={200}
                            id={"test122"}
                            // tagStyle={test1}
                        />
                    </div>
                    <div class="gallery-row-iphone12promax">
                        <Gallery
                            images={IMAGESiphone12promax}
                            backdropClosesModal={true}
                            showImageCount={false}
                            enableImageSelection={false}
                            margin={0}
                            maxRows={10}
                            rowHeight={200}
                            id={"test122"}
                            // tagStyle={test1}
                        />
                    </div>
                    <div class="gallery-row">
                        <Gallery
                            images={IMAGES}
                            backdropClosesModal={true}
                            showImageCount={false}
                            enableImageSelection={false}
                            margin={0}
                            // maxRows={5}
                            rowHeight={216}
                            id={"test122"}
                            // tagStyle={test1}
                            // tileViewportStyle={this.tileViewportStyle}
                        />
                    </div>
                    <div class="gallery-row1280">
                        <Gallery
                            images={IMAGES1280}
                            backdropClosesModal={true}
                            showImageCount={false}
                            enableImageSelection={false}
                            margin={0}
                            maxRows={5}
                            rowHeight={220}
                            id={"test122"}
                            // tagStyle={test1}
                            // tileViewportStyle={this.tileViewportStyle}
                        />
                    </div>
                    <div class="gallery-row1536">
                        <Gallery
                            images={IMAGES1536}
                            backdropClosesModal={true}
                            showImageCount={false}
                            enableImageSelection={false}
                            margin={0}
                            maxRows={5}
                            rowHeight={240}
                            id={"test122"}
                            // tagStyle={test1}
                            // tileViewportStyle={this.tileViewportStyle}
                        />
                    </div>
                    <div class="gallery-row1600">
                        <Gallery
                            images={IMAGES1536}
                            backdropClosesModal={true}
                            showImageCount={false}
                            enableImageSelection={false}
                            margin={0}
                            maxRows={5}
                            rowHeight={260}
                            id={"test122"}
                            // tagStyle={test1}
                            // tileViewportStyle={this.tileViewportStyle}
                        />
                    </div>
                    <div class="gallery-row1920">
                        <Gallery
                            images={IMAGES1536}
                            backdropClosesModal={true}
                            showImageCount={false}
                            enableImageSelection={false}
                            margin={0}
                            maxRows={5}
                            rowHeight={300}
                            id={"test122"}
                            // tagStyle={test1}
                            // tileViewportStyle={this.tileViewportStyle}
                        />
                    </div>
                    <p class="text-field-1">LET’S BE</p>
                    <p class="text-field-2">PART OF US</p>
                    <form>
                        <input
                            class="form-email-text"
                            type="text"
                            placeholder="Enter your phone number/email"
                        />
                        <button class="button-email-text">Send</button>
                    </form>
                </section>
            </div>
        );
    }
}

export default Home;
