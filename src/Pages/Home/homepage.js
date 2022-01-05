import React from 'react';
import Data from "../../Date/date";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./footer";

const Homepage = () => {
    return (
        <div>
            <div className="container">
                <input type="text" placeholder="Поиск по ресторанам и кухням" className="hero-input"/>
                <h2>Рестораны в Москве</h2>

                <Link to="/about">
                    <div className="text-center">
                        <div className="row">
                            {Data.map((el) => {
                                return (
                                    <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-sm-12">
                                        <img src={el.image} alt="img" className="hero-img"/>
                                        <h5 className="hero-text">{el.date}</h5>
                                        <p className="hero-text">{el.category}</p>
                                        <h6 className="hero-text">{el.time}</h6>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </Link>
            </div>
            <Footer/>
        </div>

    );
};

export default Homepage;