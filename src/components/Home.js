import React from "react";
import "../assets/css/Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row1">
          <Product
            id="12321341"
            title="OnePlus Nord Buds True Wireless in Ear Earbuds with Mic, 12.4mm Titanium Drivers, Playback:Up to 30hr case, 4-Mic Design + AI Noise Cancellation, IP55 Rating, Fast Charging (Black Slate)"
            price={11.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/31IukenwcRL._SX300_SY300_QL70_FMwebp_.jpg"
            reviews="28,800"
          />
          <Product
            id="49538094"
            title="TIMEX Analog Men's Watch"
            price={239.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/710fPLbrewS._UX679_.jpg"
            reviews="27,550"
          />
          <Product
            id="4903850"
            title="Logitech B170 Wireless Mouse, 2.4 GHz with USB Nano Receiver, Optical Tracking, 12-Months Battery Life, Ambidextrous, PC/Mac/Laptop - Black"
            price={199.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/516LU0H963L._SX679_.jpg"
            reviews="18,580"
          />
          <Product
            id="23445930"
            title="Zebronics Zeb-Transformer Gaming Keyboard and Mouse Combo (USB, Braided Cable)"
            price={98.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/51DY+QrEpOL._SY450_.jpg"
            reviews="10,200"
          />
          <Product
            id="3254354345"
            title="HP 14(2021) 10th Gen Intel Core i5 Laptop, 8GB RAM, 512GB SSD, 14 inches(35cm) FHD Screen, 4G LTE, Windows 10, MS Office, Natural Silver, 1.49 Kg (14s-er0503TU)"
            price={598.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/41VDgHcJOHS._SY300_SX300_QL70_FMwebp_.jpg"
            reviews="16,959"
          />
        </div>

        <div className="home__row2">
          <Product
            id="4903850"
            title="boAt Xtend/Xtend RTL Smartwatch with Alexa Built-in, 1.69” HD Display, Multiple Watch Faces, Stress Monitor, Heart & SpO2 Monitoring, 14 Sports Modes, 5 ATM & 7 Days Battery(Sandy Cream)"
            price={199.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/61gscZYmaoL._SY450_.jpg"
            reviews="13,102"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            reviews="8,100"
          />
          <Product
            id="3254354345"
            title="Redgear A-15 Wired Gaming Mouse with Upto 6400 DPI, RGB & Driver Customization for PC(Black)"
            price={50.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61MUoISbzjL._SY450_.jpg"
            reviews="3,500"
          />
        </div>

        <div className="home__row2">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            reviews="9,500"
          />
          <Product
            id="90829332"
            title="Sceptre Curved 49 inch (5120x1440) Dual QHD 32:9 Gaming Monitor up to 120Hz DisplayPort HDMI Build-in Speakers, Gunmetal Black 2021 (C505B-QSN168)"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/41rDbatBtuS._SL500_._AC_SL500_.jpg"
            reviews="1,500"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
