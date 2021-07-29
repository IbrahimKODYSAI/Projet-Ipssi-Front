import React, { Component } from 'react';
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel.scss";


class Carousel extends Component {

    render() {
        const number = 4000;
        return (
                <ReactCarousel
                    useKeyboardArrows
                    interval={number}
                    infiniteLoop
                    autoPlay
                    showThumbs={false}
                    className="carousel1"
                >
                    <div className="carou-img">
                        <img  src="https://cheapecomlife.com/wp-content/uploads/2020/10/what-is-dropshipping-banner-ecomlife.png" alt=""/>
                    </div>
                    <div className="carou-img">
                        <img  src="https://cheapecomlife.com/wp-content/uploads/2020/10/what-is-dropshipping-banner-ecomlife.png" alt=""/>
                    </div>
                </ReactCarousel>
        );
    }
}

export default Carousel;