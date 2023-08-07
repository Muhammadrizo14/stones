import React, { useState } from "react";
import eventImg from "../../../assets/img/events/1.png";
import eventImg2 from "../../../assets/img/events/2.png";
import eventImg3 from "../../../assets/img/events/3.png";
import eventImg4 from "../../../assets/img/events/4.png";
import eventImg5 from "../../../assets/img/events/5.png";
import eventImg6 from "../../../assets/img/events/6.png";
import eventImg7 from "../../../assets/img/events/7.png";
import eventImg8 from "../../../assets/img/events/8.png";
import eventImg9 from "../../../assets/img/events/9.png";


import { SwiperSlide, Swiper } from 'swiper/react'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";

import './events.scss';
import { Link } from "react-router-dom";
import { Navigation } from "swiper";

const Events = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const NextSlide = (props: any) => {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        style={{ display: currentSlide < 2 ? 'block' : 'none', }}
        onClick={onClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="62" viewBox="0 0 32 62" fill="none">
          <path d="M2 2.5L27.7217 24.9865C30.7594 28.0555 30.7594 33.0774 27.7217 36.1464L2 60" stroke="#444444"
            strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    )
  }
  const PrevSlide = (props: any) => {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        style={{ display: currentSlide > 0 ? 'block' : 'none', }}
        onClick={onClick}
      >
        <svg width="32" height="62" viewBox="0 0 32 62" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 59.5L4.27827 37.0135C1.24058 33.9445 1.24058 28.9226 4.27827 25.8536L30 2" stroke="#444444"
            strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    )
  }





  const events = [
    {
      title: "Мы работаем с проектами любой сложности!",
      subtitle: "Раскройте потенциал камня с нами - эксклюзивные изделия и услуги высочайшего качества",
      img: eventImg,
    },
    {
      title: "Мы знаем, что для заказчика значат сроки поставки и качество продукции!",
      subtitle: "С нами ваши сроки и качество гарантированы - надежность и профессионализм в каждом изделии",
      img: eventImg2,
    },
    {
      title: "Наше производство в Вашем распоряжении для изготовления изделий из камня любой сложности!",
      subtitle: "Современное производство для ваших уникальных изделий - камни любой сложности обрабатываются у нас!",
      img: eventImg3,
    },
    {
      title: "Поставки натурального камня напрямую с карьеров более 100 месторождений мира!",
      subtitle: "Прямые поставки натурального камня с лучших месторождений мира - разнообразие и качество на вашем пороге",
      img: eventImg4,
    },
    {
      title: "Возможность on-line согласования эксклюзивных материалов по фото и видео!",
      subtitle: "Онлайн согласование эксклюзивных материалов - удобство и доступность выбора прямо из дома!",
      img: eventImg5,
    },
    {
      title: "Возможность обеспечения контракта банковскими гарантиями при необходимости",
      subtitle: "Безопасность вашего контракта - банковские гарантии и надежность в каждой сделке!",
      img: eventImg6,
    },
    {
      title: "Гибкая финансовая политика и индивидуальный подход к заказчику",
      subtitle: "Гибкие  условия и персонализированный подход - ваше комфортное сотрудничество с нами!",
      img: eventImg7,
    },
    {
      title: "От подоконников и столешниц до дворцов и спорткомплексов",
      subtitle: "Отличные решения для любых проектов - от подоконников до дворцов, воплотим ваши идеи вместе!",
      img: eventImg8,
    },
    {
      title: "Нам доверяют интересные сложные проекты!",
      subtitle: "Проекты, которым доверяют - нестандартные задачи и высочайшая надежность исполнения",
      img: eventImg9,
    },
  ]

  return (
    <section className="events">
      <div className="container">
        <h1 className="title">НАШИ АКЦИИ!</h1>
        <div className="events-slider">
          <Swiper
            navigation={true} 
            modules={[Navigation]}
            loop={true}
            className="mySwi131232per"
          >
            {events.map(event => (
              <SwiperSlide>
                <Event event={event} />
              </SwiperSlide>
            ))}

          </Swiper>
        </div>
      </div>
    </section>
  );
};
export const Event = ({ event }: any) => {

  return (
    <div>
      <div className="event">
        <div className="event-text">
          <h3>{event.title}</h3>
          <p>{event.subtitle}</p>
          <Link to='/contacts'><button className="btn grey">Смотреть</button></Link>
        </div>
        <img src={event.img} alt="" />

      </div>
    </div>
  )
}
export default Events;