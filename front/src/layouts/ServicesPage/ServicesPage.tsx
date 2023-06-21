import React, {useEffect, useState} from 'react';
import Slider from "react-slick";
import infoBg from '../../assets/img/statics-bg.png';
// import servicesInfoImg from '../../assets/img/services-page-img.png';
import stone1 from '../../assets/img/stone1.png';
import stone2 from '../../assets/img/bottom-stone.png';
import stone3 from '../../assets/img/stone3.png';
import stone4 from '../../assets/img/stone4.png';
import stone5 from '../../assets/img/stone5.png';

import Header from "../Header/Header";
import Consultation from "../../components/Consultation/Consultation";

import './servicesPage.scss';
import {useParams} from "react-router-dom";
import axios from "axios";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import Empty from "../../components/Empty/Empty";

const ServicesPage = () => {
  const {id} = useParams()
  const [service, setService] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true)
    axios.get("http://1627061-ci09322.twc1.net:3001/service/" + id)
      .then((res: any) => {
        setLoading(false);
        setError(false);
        setService(res.data);
        console.log(res.data)
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      })
  }, []);

  return (
    <div className='services-page'>
      <img src={stone1} alt="" className="stone-left"/>
      <img src={stone2} alt="" className="stone-right"/>
      <Header logo='white'/>
      {loading && <Loading/>}
      {error && <Error/>}
      {!error && !loading ?
        service ?
          <div className="container">
            <div className="title">{service.title}</div>
            <div className="services-info">
              <div className='info-text'>
                <h2>{service.serviceTitle}</h2>
                <p className="text">{service.info}</p>
                <button className="btn black">Подробнее
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                    <path
                      d="M19.7071 8.70711C20.0976 8.31658 20.0976 7.68342 19.7071 7.2929L13.3431 0.928934C12.9526 0.538409 12.3195 0.538409 11.9289 0.928933C11.5384 1.31946 11.5384 1.95262 11.9289 2.34315L17.5858 8L11.9289 13.6569C11.5384 14.0474 11.5384 14.6805 11.9289 15.0711C12.3195 15.4616 12.9526 15.4616 13.3431 15.0711L19.7071 8.70711ZM-1.01226e-07 9L19 9L19 7L1.01226e-07 7L-1.01226e-07 9Z"
                      fill="black" fillOpacity="0.73"/>
                  </svg>
                </button>
              </div>
              <div className="info-img" style={{backgroundImage: `url(${infoBg})`}}>
                <img src={`http://1627061-ci09322.twc1.net:3001/upload/fayl/${service.uploadedFile[0].id}`} alt=""/>
              </div>sd
            </div>
            <Slider {...settings}>
              {service.uploadedFile.map((item: any) => <img src={`http://1627061-ci09322.twc1.net:3001/upload/fayl/${item.id}`} alt=""/>)}
            </Slider>
            <div className="social">
              <button className="btn black">Связаться с нами</button>
              <div>
                <a href='#'>
                  <svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M2.23197 8.03004C7.95849 5.52509 11.7864 3.90604 13.685 3.11179C19.1359 0.851228 20.269 0.454102 21.0039 0.454102C21.1571 0.454102 21.5245 0.48465 21.7695 0.667939C21.9533 0.820679 22.0145 1.03452 22.0451 1.18726C22.0758 1.34 22.1064 1.67603 22.0758 1.95096C21.7695 5.03632 20.514 12.5817 19.8403 16.0336C19.5647 17.5 19.0134 17.9887 18.4928 18.0498C17.3598 18.1415 16.4717 17.2861 15.3693 16.5835C13.6544 15.4532 12.6745 14.7506 10.9902 13.6509C9.06092 12.3679 10.3165 11.6653 11.4189 10.535C11.6945 10.2295 16.7473 5.67783 16.8392 5.25016C16.8392 5.18906 16.8698 5.00577 16.7473 4.91413C16.6248 4.82248 16.4717 4.85303 16.3492 4.88358C16.1655 4.91413 13.4094 6.74702 8.05036 10.3517C7.25416 10.9016 6.54983 11.1459 5.90674 11.1459C5.20241 11.1459 3.85499 10.7488 2.84443 10.4128C1.61951 10.0157 0.639567 9.80183 0.731437 9.12977C0.823306 8.76319 1.31328 8.39662 2.23197 8.03004Z"
                          fill="#A19A9A"/>
                  </svg>
                </a>
                <a href="#">
                  <svg width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M25.5152 15.3797C24.6115 15.9458 20.9352 16.1142 20.0455 15.4677C19.5573 15.1133 19.111 14.6695 18.6869 14.2475C18.3908 13.9521 18.0539 13.8087 17.7993 13.4883C17.5919 13.2258 17.4492 12.9164 17.23 12.6582C16.8606 12.2237 16.2913 11.8543 15.8407 12.385C15.163 13.1829 15.9476 14.7514 15.0435 15.3479C14.7403 15.5481 14.4345 15.606 14.0558 15.5774L13.2168 15.6157C12.7237 15.6254 11.943 15.6297 11.3827 15.5284C10.7568 15.4158 10.2408 15.0739 9.67576 14.8229C8.60221 14.3469 7.57908 13.6982 6.80091 12.7995C4.68313 10.3524 1.83831 6.9865 0.733289 3.90959C0.505489 3.27733 -0.0942276 2.02605 0.474735 1.48355C1.24861 0.921379 5.04825 0.762241 5.64046 1.63231C5.88149 1.98528 6.03312 2.50346 6.20334 2.90363C6.41505 3.40286 6.5302 3.87383 6.86135 4.31584C7.15459 4.70815 7.3713 5.10223 7.59839 5.53244C7.85337 6.01486 8.09368 6.47761 8.40373 6.92213C8.61401 7.22431 9.1701 7.82474 9.52127 7.8698C10.3788 7.97959 10.3252 5.89542 10.2615 5.38618C10.2007 4.89589 10.1846 4.37592 10.2007 3.87848C10.2147 3.45435 10.253 2.85678 10.0015 2.51025C9.59208 1.94522 8.68017 2.36828 8.60865 1.60907C8.75956 1.39343 8.72737 1.20211 9.7337 0.870956C10.5258 0.610256 11.0376 0.618481 11.56 0.660321C12.6257 0.745791 13.7554 0.457197 14.7836 0.802652C15.7656 1.13344 15.6139 2.52921 15.581 3.36602C15.537 4.5086 15.5839 5.62328 15.581 6.7823C15.5796 7.3105 15.5589 7.82367 16.2018 7.78111C16.8055 7.7407 16.8666 7.23325 17.1545 6.81413C17.5554 6.23015 17.9227 5.6383 18.3307 5.0561C18.8804 4.26971 19.0459 3.38605 19.5634 2.58035C19.7487 2.29175 19.9078 1.662 20.1928 1.4342C20.4088 1.26218 20.8186 1.33585 21.0797 1.33585H21.7005C22.1761 1.34157 22.6611 1.34837 23.1492 1.36553C23.8526 1.38985 24.6404 1.23715 25.3381 1.3355C28.3478 1.76034 21.5553 8.19845 21.9086 9.3471C22.1532 10.1403 23.7024 11.029 24.2617 11.6791C25.0074 12.5438 27.2929 14.2671 25.5152 15.3797Z"
                      fill="#A19A9A"/>
                  </svg>
                </a>
                <a href="#">
                  <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6.97271 0.18539C5.78652 0.241355 4.97648 0.430653 4.26834 0.708914C3.53544 0.994534 2.91425 1.37781 2.29619 1.9981C1.67812 2.61839 1.29752 3.24002 1.0139 3.97403C0.739431 4.68373 0.553476 5.49443 0.501079 6.68128C0.448681 7.86813 0.437087 8.24962 0.442884 11.2771C0.448681 14.3045 0.462059 14.684 0.519585 15.8733C0.576219 17.0592 0.764849 17.869 1.04311 18.5774C1.32918 19.3103 1.71201 19.9312 2.33253 20.5495C2.95305 21.1678 3.57424 21.5475 4.31003 21.8316C5.01907 22.1056 5.83 22.2925 7.01663 22.3444C8.20326 22.3964 8.58521 22.4084 11.6118 22.4026C14.6383 22.3968 15.0194 22.3834 16.2085 22.327C17.3975 22.2706 18.2031 22.0806 18.9117 21.8037C19.6446 21.517 20.266 21.1348 20.8839 20.5141C21.5017 19.8933 21.8821 19.2713 22.1655 18.5368C22.4402 17.8278 22.6268 17.0169 22.6783 15.8311C22.7303 14.6412 22.7425 14.2612 22.7367 11.2342C22.7309 8.20726 22.7173 7.82777 22.6609 6.63892C22.6045 5.45006 22.4156 4.6427 22.1376 3.93389C21.8511 3.201 21.4687 2.58049 20.8484 1.96176C20.2281 1.34303 19.6056 0.962873 18.8714 0.680152C18.1619 0.405681 17.3514 0.218612 16.1648 0.16733C14.9781 0.116048 14.5962 0.102893 11.5685 0.10869C8.54084 0.114487 8.16179 0.127419 6.97271 0.18539ZM7.10292 20.3388C6.01595 20.2916 5.42576 20.111 5.03244 19.9598C4.51159 19.7591 4.14057 19.5165 3.7486 19.1283C3.35662 18.7402 3.11582 18.3678 2.91247 17.8481C2.75974 17.4548 2.57579 16.8652 2.52495 15.7783C2.46966 14.6035 2.45806 14.2507 2.4516 11.2744C2.44513 8.298 2.4565 7.94572 2.50801 6.77046C2.55438 5.6844 2.7361 5.09354 2.88705 4.70045C3.08772 4.17893 3.32942 3.80859 3.7185 3.41684C4.10758 3.02508 4.47882 2.78383 4.999 2.58049C5.39187 2.42709 5.98139 2.2447 7.06791 2.19298C8.24362 2.13723 8.59591 2.12609 11.5719 2.11962C14.5478 2.11315 14.901 2.1243 16.0771 2.17603C17.1632 2.2233 17.7543 2.40323 18.1469 2.55507C18.668 2.75574 19.0388 2.99677 19.4306 3.38651C19.8223 3.77626 20.0638 4.14616 20.2671 4.66745C20.4208 5.0592 20.6031 5.6485 20.6544 6.73568C20.7104 7.91138 20.7231 8.26389 20.7285 11.2396C20.7338 14.2153 20.7233 14.5687 20.6718 15.7435C20.6243 16.8305 20.4442 17.4209 20.2928 17.8146C20.0921 18.3353 19.8502 18.7065 19.4609 19.098C19.0716 19.4896 18.7008 19.7308 18.1804 19.9341C17.788 20.0873 17.1978 20.2702 16.1121 20.3219C14.9364 20.3772 14.5841 20.3888 11.6071 20.3952C8.63002 20.4017 8.27885 20.3897 7.10314 20.3388M16.1913 5.29733C16.1917 5.56194 16.2706 5.82047 16.418 6.04024C16.5654 6.26 16.7747 6.43112 17.0193 6.53195C17.264 6.63279 17.533 6.6588 17.7924 6.60672C18.0519 6.55463 18.29 6.42678 18.4768 6.23933C18.6636 6.05188 18.7905 5.81325 18.8417 5.55363C18.8928 5.29401 18.8658 5.02505 18.7641 4.78078C18.6623 4.5365 18.4905 4.32789 18.2702 4.18131C18.0499 4.03473 17.791 3.95678 17.5264 3.9573C17.1717 3.95801 16.8318 4.09958 16.5814 4.35087C16.331 4.60216 16.1907 4.9426 16.1913 5.29733ZM5.86567 11.2668C5.87192 14.4285 8.43961 16.9856 11.6006 16.9796C14.7616 16.9736 17.3206 14.4062 17.3146 11.2445C17.3086 8.08284 14.7402 5.52498 11.5788 5.53122C8.41731 5.53746 5.85965 8.10558 5.86567 11.2668ZM7.87372 11.2628C7.87226 10.5278 8.08879 9.80888 8.49592 9.19695C8.90306 8.58503 9.4825 8.10757 10.161 7.82496C10.8395 7.54235 11.5865 7.46727 12.3077 7.60924C13.0288 7.7512 13.6917 8.10382 14.2124 8.6225C14.7332 9.14119 15.0884 9.80264 15.2333 10.5232C15.3781 11.2438 15.306 11.9911 15.026 12.6707C14.7461 13.3503 14.2709 13.9317 13.6606 14.3412C13.0503 14.7508 12.3323 14.9701 11.5973 14.9716C11.1092 14.9726 10.6258 14.8775 10.1745 14.6917C9.72325 14.5058 9.31301 14.2329 8.96724 13.8885C8.62146 13.5441 8.34692 13.1349 8.15929 12.6844C7.97166 12.2339 7.87462 11.7508 7.87372 11.2628Z"
                      fill="#A19A9A"/>
                  </svg>
                </a>
              </div>
            </div>
          </div> : <Empty />
        : null}
      <div className="services-text-wrapper">
        <img src={stone3} alt=""/>
        <div className="container">
          <div className="services-text">
            <div className="text-item">
              <div className="text-item-top">
                <h3>ПРАВИЛА <br/><span>УХОДА</span></h3>
                <svg width="121" height="122" viewBox="0 0 121 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.06641 82.9037C8.06641 97.3591 19.8276 109.12 34.2831 109.12C48.7385 109.12 60.4997 97.3591 60.4997 82.9037C60.4997 68.4482 48.7385 56.687 34.2831 56.687C19.8276 56.687 8.06641 68.4482 8.06641 82.9037ZM12.0997 82.9037C12.0997 77.0453 14.3987 71.7253 18.1215 67.7565L26.2386 76.888C25.3613 78.0576 24.7059 79.4027 24.4034 80.887H20.1664V84.9203H24.4034C24.6656 86.205 25.1778 87.3988 25.8796 88.4556L22.8748 91.4604L25.7264 94.312L28.7312 91.3071C29.7879 92.0089 30.9818 92.5212 32.2664 92.7833V97.0203H36.2997V92.7833C37.3827 92.5615 38.3809 92.1319 39.3086 91.5935L47.4297 100.731C43.7473 103.454 39.2078 105.087 34.2831 105.087C22.052 105.087 12.0997 95.1348 12.0997 82.9037ZM34.2831 76.8537C37.6186 76.8537 40.3331 79.5681 40.3331 82.9037C40.3331 83.9604 40.0366 84.9405 39.5587 85.8057L32.0042 77.3074C32.7101 77.019 33.4764 76.8537 34.2831 76.8537ZM36.5619 88.4999C35.8561 88.7883 35.0897 88.9537 34.2831 88.9537C30.9475 88.9537 28.2331 86.2392 28.2331 82.9037C28.2331 81.8469 28.5295 80.8668 29.0075 80.0017L36.5619 88.4999ZM56.4664 82.9037C56.4664 88.7621 54.1674 94.0821 50.4446 98.0509L42.3276 88.9194C43.2048 87.7497 43.8602 86.4046 44.1627 84.9203H48.3997V80.887H44.1627C43.9006 79.6024 43.3883 78.4085 42.6865 77.3518L45.7922 74.2461L42.9406 71.3946L39.835 74.5002C38.7782 73.7984 37.5844 73.2862 36.2997 73.024V68.787H32.2664V73.024C31.1835 73.2459 30.1852 73.6754 29.2575 74.2139L21.1364 65.0763C24.8189 62.3538 29.3584 60.7203 34.2831 60.7203C46.5142 60.7203 56.4664 70.6726 56.4664 82.9037Z" fill="white"/>
                  <path d="M66.3403 25.0113C68.9498 25.2816 71.5715 25.7393 74.1306 26.3746C74.7336 26.5258 75.3689 26.3887 75.8569 26.0035C76.347 25.6224 76.6333 25.0375 76.6333 24.4164V16.0493C76.6333 15.1236 76.0041 14.3169 75.1027 14.0911C72.3641 13.4094 69.5548 12.9194 66.7537 12.629C59.9031 11.9292 53.0545 12.4112 46.3531 14.0427C46.1958 10.8463 43.5681 8.28711 40.3333 8.28711H28.2333C24.8978 8.28711 22.1833 11.0015 22.1833 14.3371V30.4704H20.1667C19.0515 30.4704 18.15 31.3719 18.15 32.4871V40.5538C8.14128 40.5538 0 48.6951 0 58.7038V119.204C0 120.319 0.90145 121.22 2.01667 121.22H66.55C67.6652 121.22 68.5667 120.319 68.5667 119.204V58.7038C68.5667 48.6951 60.4254 40.5538 50.4167 40.5538V32.4871C50.4167 31.3719 49.5152 30.4704 48.4 30.4704H46.3833V26.5742C52.9355 24.8641 59.6429 24.3257 66.3403 25.0113ZM66.3423 16.6442C68.4336 16.8579 70.5329 17.1947 72.6 17.6485V21.8956C70.664 21.5023 68.7058 21.1998 66.7557 20.9982C59.9152 20.3044 53.0766 20.7804 46.3833 22.4038V18.2051C52.9274 16.4949 59.6328 15.9585 66.3423 16.6442ZM64.5333 58.7038V117.187H4.03333V58.7038C4.03333 50.9215 10.3677 44.5871 18.15 44.5871H50.4167C58.199 44.5871 64.5333 50.9215 64.5333 58.7038ZM22.1833 40.5538V34.5038H46.3833V40.5538H22.1833ZM26.2167 30.4704V14.3371C26.2167 13.2239 27.1201 12.3204 28.2333 12.3204H40.3333C41.4465 12.3204 42.35 13.2239 42.35 14.3371V30.4704H26.2167Z" fill="white"/>
                  <path d="M96.7991 18.3705H88.7324V22.4038H96.7991V18.3705Z" fill="white"/>
                  <path d="M108.901 18.3705H100.834V22.4038H108.901V18.3705Z" fill="white"/>
                  <path d="M121 18.3705H112.934V22.4038H121V18.3705Z" fill="white"/>
                  <path d="M85.7684 28.5231L84.7246 32.4189L92.5181 34.5071L93.562 30.6113L85.7684 28.5231Z" fill="white"/>
                  <path d="M97.4579 31.6562L96.4141 35.552L104.206 37.6397L105.249 33.7439L97.4579 31.6562Z" fill="white"/>
                  <path d="M109.143 34.7863L108.1 38.6821L115.893 40.7703L116.937 36.8745L109.143 34.7863Z" fill="white"/>
                  <path d="M92.5182 6.27034L84.7246 8.35852L85.7684 12.2543L93.562 10.1661L92.5182 6.27034Z" fill="white"/>
                  <path d="M104.204 3.13928L96.4121 5.22693L97.4559 9.12272L105.248 7.03507L104.204 3.13928Z" fill="white"/>
                  <path d="M115.891 7.97867e-05L108.098 2.08826L109.141 5.98405L116.935 3.89588L115.891 7.97867e-05Z" fill="white"/>
                  <path d="M114.316 66.9096C115.344 65.4375 115.959 63.6567 115.959 61.7288C115.959 56.7255 111.888 52.6538 106.884 52.6538C101.881 52.6538 97.8092 56.7255 97.8092 61.7288C97.8092 63.6567 98.4243 65.4395 99.4528 66.9096C95.6635 67.5691 92.7676 70.8623 92.7676 74.8371V90.9705C92.7676 91.3678 92.8866 91.759 93.1064 92.0897L96.8009 97.6315V119.204C96.8009 120.319 97.7024 121.22 98.8176 121.22H114.951C116.066 121.22 116.968 120.319 116.968 119.204V97.6315L120.662 92.0897C120.882 91.759 121.001 91.3678 121.001 90.9705V74.8371C121.001 70.8623 118.105 67.5691 114.316 66.9096ZM106.884 56.6871C109.665 56.6871 111.926 58.9478 111.926 61.7288C111.926 64.5098 109.665 66.7705 106.884 66.7705C104.103 66.7705 101.843 64.5098 101.843 61.7288C101.843 58.9478 104.103 56.6871 106.884 56.6871ZM116.968 90.3594L113.273 95.9012C113.053 96.232 112.934 96.6232 112.934 97.0205V117.187H100.834V97.0205C100.834 96.6232 100.715 96.232 100.495 95.9012L96.8009 90.3594V74.8371C96.8009 72.6128 98.6099 70.8038 100.834 70.8038H112.934C115.159 70.8038 116.968 72.6128 116.968 74.8371V90.3594Z" fill="white"/>
                  <path d="M94.7839 52.6538C94.7839 51.6938 94.2172 50.8226 93.3399 50.4294L93.3339 50.4274C89.7624 48.8463 88.506 47.5899 86.9229 44.0124C86.5317 43.1371 85.6605 42.5704 84.7005 42.5704C83.7406 42.5704 82.8694 43.1371 82.4741 44.0204C80.8931 47.5919 79.6367 48.8483 76.0591 50.4314C75.1839 50.8226 74.6172 51.6938 74.6172 52.6538C74.6172 53.6137 75.1839 54.4849 76.0672 54.8802C79.6387 56.4612 80.8951 57.7176 82.4761 61.2891C82.8654 62.1684 83.7386 62.7371 84.7005 62.7371C85.6625 62.7371 86.5357 62.1684 86.9269 61.2871C88.508 57.7156 89.7644 56.4592 93.3419 54.8761C94.2172 54.4849 94.7839 53.6137 94.7839 52.6538ZM84.7005 56.8384C83.5853 55.0536 82.2987 53.767 80.5159 52.6538C82.3007 51.5386 83.5873 50.2519 84.7005 48.4692C85.8157 50.2539 87.1024 51.5386 88.8851 52.6538C87.1004 53.769 85.8157 55.0536 84.7005 56.8384Z" fill="white"/>
                </svg>
              </div>
              <p className="text">Облицованный натуральным камнем пол необходимо периодически очищать от пыли и грязи. Для ухода используются специальные моющие составы, не царапающие и не повреждающие поверхность материала. Для защиты каменной плитки с пористой структурой применяются компоненты на основе природного воска, которые не позволяют мелким частицам загрязнений проникать внутрь отделочного материала.</p>
            </div>
            <div className="text-item">
              <div className="text-item-bg">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M98.1852 1.81456C93.9487 -2.42185 83.6456 1.01245 75.1728 9.48526C68.2619 16.3962 62.4623 23.3364 58.2971 29.4293L42.9556 14.0877C42.5541 13.6861 42.0012 13.4431 41.4551 13.4212C40.909 13.3993 40.3734 13.6019 40.0026 13.9725C37.8787 16.0963 35.7549 18.2202 33.631 20.344C33.2602 20.7148 33.0578 21.2505 33.0797 21.7966C33.1017 22.3427 33.3494 22.8907 33.751 23.2923L76.7074 66.2487C77.109 66.6503 77.657 66.898 78.2031 66.92C78.7492 66.9419 79.2849 66.7392 79.6557 66.3687C81.7795 64.2448 83.9034 62.121 86.0272 59.9971C86.398 59.6263 86.6004 59.0907 86.5785 58.5446C86.5566 57.9985 86.3136 57.4457 85.9122 57.0441L70.5706 41.7024C76.6636 37.5372 83.6038 31.7376 90.5147 24.8267C98.9873 16.3539 102.422 6.05097 98.1852 1.81456Z" fill="#010E27"/>
                  <path d="M0 57.0442L4.94761 61.9918C9.81299 56.9398 17.6386 49.0229 18.1893 49.8143C18.7024 50.5518 11.7344 58.2472 6.64946 63.6936L11.7073 68.7515C15.4477 65.2586 20.5394 60.7213 21.2573 61.2053C21.9724 61.6874 17.4232 66.9637 13.8598 70.9039L22.3504 79.3946C26.6618 74.6259 33.2705 67.5536 33.9715 68.224C34.691 68.912 28.3448 76.576 24.2872 81.3314L30.1554 87.1996C37.0285 80.0365 51.4097 65.2655 52.3814 66.0282C53.3027 66.7511 39.6755 81.0072 31.934 88.9782L37.4666 94.5108C40.4055 92.1174 43.4599 89.8378 43.8333 90.359C44.1521 90.8037 42.1308 93.6577 39.7247 96.7689L42.9559 100L73.639 69.3171L30.6826 26.3607L0 57.0442Z" fill="#010E27"/>
                </svg>
              </div>
              <p className="text">Сразу после окончания облицовочных работ с каменных поверхностей следует удалить пятна грязи, следы от затирки и цементного раствора, отпечатки пальцев. Для очистки плит из натурального камня рекомендуется использовать очищенную воду. </p>
            </div>
            <div className="text-item">
              <div className="text-item-bg">
                <svg width="106" height="78" viewBox="0 0 106 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M101.819 10.4143C97.9468 1.96608 88.4425 -1.90603 79.9943 0.910049L70.138 4.43015C59.2257 8.30226 46.9053 8.30226 35.641 4.43015L25.7847 0.910049C17.3365 -1.90603 8.18423 2.31809 3.96011 10.4143C-1.32004 21.6786 -1.32004 34.703 3.96011 45.9673C7.1282 52.6555 13.4644 56.5276 20.1526 56.5276C21.9126 56.5276 24.0247 56.1756 25.7847 55.4716L35.641 51.9515C46.5533 48.0794 58.8737 48.0794 70.138 51.9515L79.9943 55.4716C88.4425 58.2877 97.9468 54.4156 101.819 45.9673C107.099 34.703 107.099 22.0306 101.819 10.4143ZM66.9699 17.8065H74.0101C76.1221 17.8065 77.5302 19.2146 77.5302 21.3266C77.5302 23.4387 76.1221 24.8467 74.0101 24.8467H66.9699C64.8578 24.8467 63.4498 23.4387 63.4498 21.3266C63.4498 19.2146 64.8578 17.8065 66.9699 17.8065ZM24.7287 31.8869H17.6885C15.5764 31.8869 14.1684 30.4789 14.1684 28.3668C14.1684 26.2548 15.5764 24.8467 17.6885 24.8467H24.7287C26.8408 24.8467 28.2488 26.2548 28.2488 28.3668C28.2488 30.4789 26.8408 31.8869 24.7287 31.8869ZM38.8091 38.9271H31.7689C29.6568 38.9271 28.2488 37.5191 28.2488 35.407C28.2488 33.295 29.6568 31.8869 31.7689 31.8869H38.8091C40.9212 31.8869 42.3292 33.295 42.3292 35.407C42.3292 37.5191 40.9212 38.9271 38.8091 38.9271ZM38.8091 24.8467H31.7689C29.6568 24.8467 28.2488 23.4387 28.2488 21.3266C28.2488 19.2146 29.6568 17.8065 31.7689 17.8065H38.8091C40.9212 17.8065 42.3292 19.2146 42.3292 21.3266C42.3292 23.4387 40.9212 24.8467 38.8091 24.8467ZM56.4096 31.8869H49.3694C47.2573 31.8869 45.8493 30.4789 45.8493 28.3668C45.8493 26.2548 47.2573 24.8467 49.3694 24.8467H56.4096C58.5217 24.8467 59.9297 26.2548 59.9297 28.3668C59.9297 30.4789 58.5217 31.8869 56.4096 31.8869ZM74.0101 38.9271H66.9699C64.8578 38.9271 63.4498 37.5191 63.4498 35.407C63.4498 33.295 64.8578 31.8869 66.9699 31.8869H74.0101C76.1221 31.8869 77.5302 33.295 77.5302 35.407C77.5302 37.5191 76.1221 38.9271 74.0101 38.9271ZM88.0905 31.8869H81.0503C78.9382 31.8869 77.5302 30.4789 77.5302 28.3668C77.5302 26.2548 78.9382 24.8467 81.0503 24.8467H88.0905C90.2025 24.8467 91.6106 26.2548 91.6106 28.3668C91.6106 30.4789 90.2025 31.8869 88.0905 31.8869Z" fill="#010E27"/>
                  <path d="M85.6263 63.5677C82.8102 63.5677 80.3462 63.2157 77.5301 62.1596L67.6738 58.6395C58.1695 55.1194 47.6092 55.1194 38.105 58.6395L28.2487 62.1596C25.7846 63.2157 22.9685 63.5677 20.1525 63.5677C12.4082 63.5677 5.01603 59.6956 0.0878906 53.3594C0.439901 58.2875 1.84794 62.8636 3.96 67.4398C7.12809 74.128 13.4643 78.0001 20.1525 78.0001C21.9125 78.0001 24.0246 77.6481 25.7846 76.944L35.6409 73.4239C46.5532 69.5518 58.8736 69.5518 70.1379 73.4239L79.9942 76.944C88.4424 79.7601 97.9467 75.888 101.819 67.4398C103.931 63.2157 104.987 58.2875 105.691 53.7114C100.763 60.0476 93.3705 63.5677 85.6263 63.5677Z" fill="#010E27"/>
                </svg>
              </div>
              <p className="text">Недопустимо использование металлических губок, жестких щеток, моющих средств с абразивными частицами, чрезмерно горячей воды и острых предметов для ухода за каменной облицовкой.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="consultation-wrapper">
        <img src={stone4} alt=""/>
        <img src={stone5} alt=""/>
        <div className="container">
          <Consultation title={'ОСТАЛИСЬ ВОПРОСЫ?'} subtitle={'Мы поможем с любым вопросом'} />
        </div>
      </div>
    </div>
  );
};

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  className: 'services-slider',
  arrows: true,
  nextArrow: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="62" viewBox="0 0 32 62" fill="none">
    <path d="M2 2.5L27.7217 24.9865C30.7594 28.0555 30.7594 33.0774 27.7217 36.1464L2 60" stroke="#444444"
          strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  prevArrow: <svg width="32" height="62" viewBox="0 0 32 62" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 59.5L4.27827 37.0135C1.24058 33.9445 1.24058 28.9226 4.27827 25.8536L30 2" stroke="#444444"
          strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 470,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
};

export default ServicesPage;