import React, {useState} from 'react';
import Slider from "react-slick";

import './productSlider.scss'
import {HOST_URL} from "../../../assets/consts";


const ProductSlider = ({images}: {images: {id: any}[]}) => {
  const [nav1, setNav1] = useState<Slider | undefined>();
  const [nav2, setNav2] = useState<Slider | undefined>();

  return (
    <div className='product-slider'>
      <Slider className='main-slider' asNavFor={nav2} ref={(slider1) => slider1 ? setNav1(slider1) : null}>
        {images.map((slide, i) =>
          <div key={i} className='product-slide'>
            <div style={{backgroundImage: `url(${HOST_URL}upload/fayl/${slide.id})`}}/>
          </div>
        )}
      </Slider>

      <Slider
        asNavFor={nav1}
        ref={(slider2) => slider2 ? setNav2(slider2) : null}
        slidesToShow={3}
        focusOnSelect={true}
        className='slides'
        infinite={false}
      >
        {images.map((slide, i) =>
          <div key={i} className='product-slide'>
            <div style={{backgroundImage: `url(${HOST_URL}upload/fayl/${slide.id})`}}/>
          </div>
        )}
      </Slider>
    </div>
  );
};

export default ProductSlider;