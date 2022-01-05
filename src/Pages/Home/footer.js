import React from 'react';
import "./homepage";
import img from "./../../assets/Img/white-logo.svg"
import globus from "./../../assets/Img/globus.svg"
import facebook from "./../../assets/Img/facebook.svg"
import twitter from "./../../assets/Img/twitter.svg"
import instagram from "./../../assets/Img/instagram.svg"
import App from "./../../assets/Img/app.svg"
import Google from "./../../assets/Img/google.png"
import St from "./../../assets/Img/st.svg"

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div>
                    <img src={img} alt="img" className="footer-img"/>
                    <div className="footer-width"> </div>
                </div>

                <div className='row'>
                    <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-sm-12">
                        <img src={globus} alt="img" className="footer-globus"/>
                        <select className="footer-select">
                            <option>Русский</option>
                            <option>Кыргызский</option>
                            <option>English</option>
                        </select>
                        <div className="footer-twitter">
                            <h1 className="footer-text"><span className="footer-text2">#</span>UberEats</h1>
                            <img src={facebook} alt="img" className="footer-instagram"/>
                            <img src={twitter} alt="img" className="footer-instagram"/>
                            <img src={instagram} alt="img" className="footer-instagram"/>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-sm-12">
                        <h2 className="footer-ob">Об UberEats</h2>
                        <h2 className="footer-ob">Станьте партнёром по доставке</h2>
                        <h2 className="footer-ob">Станьте парнёром-рестораном</h2>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-sm-12">
                        <h2 className="footer-ob">Все города</h2>
                        <h2 className="footer-ob">Цены</h2>
                        <h2 className="footer-ob">Помощь</h2>
                        <h2 className="footer-ob">FAQs</h2>
                    </div>
                </div>

                <div className="footer-width2"> </div>
                <div className="text-center">
                    <img src={App} alt="img" className="footer-app"/>
                    <img src={Google} alt="img" className="footer-app"/>
                </div>

                <div className="footer-width3"> </div>
                <div className="row">
                    <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-sm-12">
                        <h2 className="footer-uber">© 2017 Uber Technologies Inc.</h2>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-sm-12">
                        <h2 className="footer-uber">Обработка персональных данных</h2>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-sm-12 d-flex">
                        <h2 className="footer-uber">Пользовательское соглашение</h2>
                        <a href="#">
                            <div className="footer-square">
                                <img src={St} alt="img" className="footer-st"/>
                            </div>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;