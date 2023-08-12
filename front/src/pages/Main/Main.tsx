import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import bottomStone from "../../assets/img/bottom-stone.png";


import Header from "../../layouts/Header/Header";
import Statics from "./Statics/Statics";
import Info from "./Info/Info";
import Events from "./Events/Events";
import Collection from "./Collection/Collection";
import Advantages from "./Advantages/Advantages";
import Consultation from "../../components/Consultation/Consultation";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./main.scss";
import { Link } from "react-router-dom";
import OurWorksVideos from "../../components/OurWorksVideos/OurWorksVideos";
import DynamicPage from "../../assets/dynamicPage";
import axios from "axios";
import { HOST_URL } from "../../assets/consts";

const Main = () => {
  const [slider, setSlider] = useState<any>([])


  useEffect(() => {
    axios.get(`${HOST_URL}slider/`)
      .then((res) => {
        setSlider(res.data)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])


  return (
    <div className="main">
      <DynamicPage title='Продажа камня в санкт-Петербурге и лен области под ключ ' />
      <div className="main-bg">
        <Slider {...settings}>
          {slider.map((slide: any) => (
            <div className="main-slide">
              <div style={{ backgroundImage: `url(${HOST_URL}upload/fayl/${slide.uploadedFile[0]?.id})` }}></div>
            </div>
          ))}
        </Slider>
      </div>
      <Header logo={'white'} />
      <main>
        <div className="container">
          <h1 className="main-title">Современная эстетика, воплощена в камне...</h1>
          <Link to="/services">
            <button className="btn">Подробнее</button>
          </Link>
          <div className="main-arrow">
            <button>
              <svg width="62" height="32" viewBox="0 0 62 32" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M59.4998 2L37.0133 27.7217C33.9443 30.7594 28.9224 30.7594 25.8535 27.7217L1.99982 2"
                  stroke="white" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round"
                  strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </main>
      <Info />
      <Statics />
      <Events />
      <Collection />
      <Advantages />
      <section className='main-bottom'>
        <img src={bottomStone} alt="" />
        <div className="container">
          <h1 className="title">ОСТАЛИСЬ ВОПРОСЫ? <br /><span>МЫ ПОМОЖЕМ ВАМ!</span></h1>
          <div className="inner">
            <Consultation />
            <OurWorksVideos />
          </div>
        </div>
      </section>
    </div>
  );
};

const settings = {
  dots: true,
  speed: 500,
  slidesToShow: 1,
  fade: true,
  vertical: true,
  swipe: false,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
};

export default Main;