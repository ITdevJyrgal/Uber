import React from 'react';
import DateHero from "./dateHero";
import Footer from "../Home/footer";
import {Link} from "react-router-dom";


const Hero = () => {
    return (
        <div>
            <div className="container">

                <Link to="/">
                    <div className="d-flex">
                        <h2 className="supe">Закуски</h2>
                        <h2 className="supe">Салаты</h2>
                        <h2 className="supe">Супы</h2>
                        <h2 className="supe">Горячие блюда</h2>
                        <h2 className="supe">Гарниры</h2>
                        <h2 className="supe">Десерты</h2>
                    </div>
                </Link>

            </div>
            <div className="supe-width">

            </div>
            <div className="container">
                <div>
                    <h1 className="supe-zac">Закуски</h1>
                </div>
                <div className="row">
                    {
                        DateHero.map((el) => {
                            return (
                                <div className="col-xxl-6 col-xl-6 col-lg-12">
                                    <div>
                                        <img src={el.image} alt="img" className="supe-img"/>
                                    </div>
                                    <div className="supe-square">
                                        <div className="d-flex">
                                            <div>
                                                <div className="supe-ob">
                                                    <h5 className="supe-na">{el.date}</h5>
                                                    <p className="supe-na2">{el.category}</p>
                                                    <h1 className="supe-price">{el.time}</h1>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>


            </div>

            <Footer/>
        </div>
    );
};

export default Hero;