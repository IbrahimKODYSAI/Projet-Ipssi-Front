import React, { useEffect } from "react";

import Carousel from './Carousel';
import ArticleOfTheWeek from './ArticleOfTheWeek';
import Articles from 'containers/Home/Articles';
import './home.scss'


const Home = ({ getProducts, products }) => {

    useEffect(() => {
        getProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    return (
        <div className="home">
            <div className="home-container">
                <div className="home-container_leftbox">
                    <Carousel />
                </div>
                <div className="home-container_rightbox">
                    <ArticleOfTheWeek/>
                </div>
            </div>
            <div className="div-btn">
                <div >
                    <button className="btn1">
                        Populaire</button>
                    <button className="btn2" >
                        Nouveautés</button>
                </div>
                <div>
                    <button className="btn4">
                    Promotions</button>
                </div>
            </div>
            <div className="product-div">
                <h3 className="product-div_title">Nouveautés</h3>
                <Articles />
            </div>
        </div>
)}

export default Home;