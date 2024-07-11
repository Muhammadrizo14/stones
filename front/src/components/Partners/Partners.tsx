import React, { useEffect, useState } from 'react'
import { SwiperSlide, Swiper } from 'swiper/react'
import "swiper/css";
import "swiper/css/pagination";
import axios from 'axios'
import { HOST_URL } from '../../assets/consts'
import { uploadedFile } from '../../@types'
import { Autoplay } from 'swiper';
import './index.css'


interface ParnerT {
  id: number;
  uploadedFile: uploadedFile[]
}

export default function Partners() {
  const [partners, setPartners] = useState<ParnerT[]>([])


  const getAllPartners = () => {
    axios
      .get(`${HOST_URL}partners`)
      .then(res => {
        console.log(res.data);
        setPartners(res.data)
      })
      .catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    getAllPartners()
  }, [])

  return (
    <div>
      <h1 className='contact__title'>Наши партнеры</h1>
      <Swiper
        slidesPerView={6}
        spaceBetween={1}
        loop={true}
        speed={1600}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false, // Allow autoplay to continue on interaction
        }}
        modules={[Autoplay]}
      >
        {partners.map((image) => (
          <SwiperSlide key={image?.id}><img width={100} height={50} src={`${HOST_URL}upload/fayl/${image.uploadedFile?.[0]?.id}`} alt="vkamne" /></SwiperSlide>
        ))}
      </Swiper>


    </div>
  )
}
