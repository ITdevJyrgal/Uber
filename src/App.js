import {Routes, Route, Link} from 'react-router-dom';
import Homepage from "./Pages/Home/homepage";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./Pages/About/aboutpage";
import Images from './assets/Img/uber.svg'
import img from './assets/Img/basket.svg'
import "./Style/index.scss"
import React from "react";

function App() {
    return (
        <>
            <header>
                <div className="container">
                    <div className="width">
                        <Link to="/"><img src={Images} alt="img" className="width-img"/></Link>
                        <Link to="/about">
                            <button className="width-btn">Войти</button>
                            <img src={img} alt="img" className="width-basket"/>
                        </Link>
                    </div>
                </div>
            </header>

            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>

        </>
    );
}

export default App