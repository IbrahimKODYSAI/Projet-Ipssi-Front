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
                        <img  src="http://localhost:3001/uploads/banner1.jpg" alt=""/>
                    </div>
                    <div className="carou-img">
                        <img  src="http://localhost:3001/uploads/banniere2.jpg" alt=""/>
                    </div>
                    <div className="carou-img">
                        <img  src="http://localhost:3001/uploads/banniere3.jpg" alt=""/>
                    </div>
                    <div className="carou-img">
                        <img  src="http://localhost:3001/uploads/banniere4.jpg" alt=""/>
                    </div>
                </ReactCarousel>
        );
    }
}

export default Carousel;