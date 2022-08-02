import React from "react";
import image from "../images/developer.png";
import './Home.css';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home">
            <div className="home-container">
                <div className="home-inner-container">
                    <h1>Hello....</h1>
                    <h2>My name is <span>Kaduailung Riamei</span></h2>
                    <h2>I am a <span>Web Developer</span></h2>
                </div>
                <div className="web-dev-image">
                    <img src={image} alt="web"/>
                </div>
                <div className="socials">
                        <Link to="">1</Link>
                        <Link to="">2</Link>
                        <Link to="">3</Link>
                        <Link to="">4</Link>
                        <Link to="">5</Link>
                </div>
            </div>
            <div className="about">
                <div className="about-title">
                    <h1>About Me</h1>
                </div>
                <div className="about-content">
                    <div className="about-photo-container">
                        photo here
                    </div>
                    <div className="about-description">
                        desc here
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;