import React, {useEffect, useState} from 'react';

import {useParams} from "react-router-dom";
import Header from "../layouts/Header/Header";
import Loading from "../components/Loading/Loading";
import Error from "../components/Error/Error";
import Empty from "../components/Empty/Empty";
import serviceImg from '../assets/img/statics-img.png'
import axios from "axios";
import {HOST_URL} from "../assets/consts";
import ProductSlider from "./ProductPage/ProductSlider/ProductSlider";
import Slider from "react-slick";

const PortfolioPage = () => {
  const {id} = useParams();
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [blog, setBlog] = useState<{ title: string, info: string, id: number, uploadedFile: { id: number }[] } | null>(null)
  const [nav1, setNav1] = useState<Slider | undefined>();
  const [nav2, setNav2] = useState<Slider | undefined>();

  useEffect(() => {
    setLoading(true)
    axios.get(`${HOST_URL}profile/${id}`)
      .then((res: any) => {
        setLoading(false);
        setError(false);
        setBlog(res.data);



      })
      .catch(() => {
        setLoading(false);
        setError(true);
      })
  }, [id])

  return (
    <div>
      <Header/>
      <div className="container">
        {loading && <Loading/>}
        {error && <Error/>}
        {!error && !loading ?
          blog ?
            <div
              style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 20, padding: '20px 0'}}
              className='blog-inner'>
              <h1 className="blog__title title">{blog.title}</h1>
              <div className='portfolio__wrap blog__wrap'>
                <div className='portfolio__slider product-slider '>
                  <Slider className='portfolio__main__slider main-slider' asNavFor={nav2}
                          ref={(slider1) => slider1 ? setNav1(slider1) : null}>
                    {blog.uploadedFile.map((slide, i) =>
                      <div key={i} className='product-slide'>
                        <div style={{backgroundImage: `url(${HOST_URL}upload/fayl/${slide.id})`}}/>
                      </div>
                    )}
                  </Slider>
                  <Slider
                    asNavFor={nav1}
                    ref={(slider2) => slider2 ? setNav2(slider2) : null}
                    slidesToShow={6}
                    focusOnSelect={true}
                    className='portfolio__minislider slides'
                    vertical={true}
                    verticalSwiping={true}
                    infinite={false}
                  >
                    {blog.uploadedFile.map((slide, i) =>
                      <div key={i} className='product-slide'>
                        <div style={{backgroundImage: `url(${HOST_URL}upload/fayl/${slide.id})`}}/>
                      </div>
                    )}
                  </Slider>
                </div>
              </div>
              <p className='text'
                 style={{overflowWrap: 'break-word', textAlign: "center", padding: '20px 0px'}}>{blog.info}</p>

            </div>
            : <Empty/>
          : null}
      </div>
    </div>
  );
};

export default PortfolioPage;