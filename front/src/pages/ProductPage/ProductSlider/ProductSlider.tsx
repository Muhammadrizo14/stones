import React, {useState} from 'react';
import Slider from "react-slick";
import slide1 from '../../../assets/img/productPage/slide1.png'
import slide2 from '../../../assets/img/productPage/slide2.png'
import slide3 from '../../../assets/img/productPage/slide3.png'
import slide4 from '../../../assets/img/productPage/slide4.png'

import './productSlider.scss'

const productSlides = [slide1, slide2, slide3, slide4]

const ProductSlider = () => {
  const [nav1, setNav1] = useState<Slider | undefined>();
  const [nav2, setNav2] = useState<Slider | undefined>();

  return (
    <div className='product-slider'>
      <Slider className='main-slider' asNavFor={nav2} ref={(slider1) => slider1 ? setNav1(slider1) : null}>
        {productSlides.map((slide, i) =>
          <div key={i} className='product-slide'>
            <div style={{backgroundImage: `url(${slide})`}}></div>
          </div>
        )}
      </Slider>

      <Slider
        asNavFor={nav1}
        ref={(slider2) => slider2 ? setNav2(slider2) : null}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
        className='slides'
      >
        {productSlides.map((slide, i) =>
          <div key={i} className='product-slide'>
            <div style={{backgroundImage: `url(${slide})`}}></div>
          </div>
        )}
      </Slider>
    </div>
  );
};

export default ProductSlider;