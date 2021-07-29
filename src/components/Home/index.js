import React from 'react';
import Carousel from './Carousel';
import ArticleOfTheWeek from './ArticleOfTheWeek';
import Articles from 'containers/Home/Articles';
import './home.scss'


const Home = () => {

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
                    <button className="btn3" >
                        Meilleures Ventes</button>
                </div>
                <div>
                    <button className="btn4">
                    Promotions</button>
                </div>
            </div>
            <Articles />

        </div>
)}

export default Home;