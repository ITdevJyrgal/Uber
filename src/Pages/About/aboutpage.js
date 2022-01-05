import React from 'react';
import Bal from "./../../assets/Img/bal.png"
import Hero from "./../Hero/hero"

const Aboutpage = () => {
    return (
        <div>
            <img src={Bal} alt="img" className="about"/>
              <div className="container">
                  <div className="about-square">
                      <h1 className="about-tr">Трактир «Пушкин»</h1>
                         <div className="d-flex  justify-content-around align-content-center">
                           <h1 className="about-rub">₽₽₽ • Европейская</h1>
                        <button className='about-btn'>40 - 50 мин</button>
                    </div>
                </div>
            </div>
            <Hero/>
        </div>
    );
};

export default Aboutpage;