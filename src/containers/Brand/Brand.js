import React, { Component } from "react";
import { render } from "react-dom";
import "./Brand.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
                <section class="section-class-brand-page">
                    <div class="bg-for-brandpage">
                        <img
                            class="image-brandpage"
                            src="brand-cover.jpg"
                        ></img>
                    </div>
                    <p class="text-brandpage">CAFE RUCI</p>
                </section>
                <section class="section-class-brands-page">
                    <p class="brands-text-page">
                        Cafe Ruci is located in Jalan Suryo No. 49, South
                        Jakarta, Cafe Ruci is a newly opened restaurant in the
                        area that serves Southern European food, speciality
                        coffee and delicious cocktails.
                    </p>
                    <p class="brands-menu-title">OUR MENU</p>
                    <div class="garis-brands-menu"></div>
                    <div class="food-drink-image">
                        <img class="food-brandpage" src="gallery - 7.jpg"></img>
                        <p class="text-brand-food">FOOD</p>

                        <img
                            class="drink-brandpage"
                            src="gallery - 10.jpg"
                        ></img>
                        <p class="text-brand-drink">DRINK</p>
                    </div>
                </section>
                <section
                    class="section-class-event"
                    style={{ backgroundColor: "white" }}
                >
                    <div
                        class="bg-for-brandpage"
                        style={{ position: "absolute" }}
                    >
                        <img
                            class="image-brandpage"
                            src="brand-cover.jpg"
                            style={{ height: "40%", zIndex: "1" }}
                        ></img>
                    </div>
                    <p class="event-promo-title" style={{ color: "white" }}>
                        EVENT & PROMO
                    </p>

                    <div
                        class="garis-event"
                        style={{ border: "2px solid #FFFFFF" }}
                    ></div>
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
            </div>
        );
    }
}

export default Brand;
