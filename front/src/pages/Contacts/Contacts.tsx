import React from 'react';
import contactsLeft from '../../assets/img/contacts/contacts-left.png';
import contactsRight from '../../assets/img/contacts/contacts-right.png';

import Header from "../../layouts/Header/Header";
import Consultation from "../../components/Consultation/Consultation";

import './contacts.scss';
import DynamicPage from "../../assets/dynamicPage";

const Contacts = () => {
  return (
    <div className='contacts'>
      <DynamicPage title={'Контакты'} />
      <Header />
      <section className="info">
        <h1 className="title">КОНТАКТНАЯ ИНФОРМАЦИЯ</h1>
        <div className="container">
          <div className="info-inner">
            <div className="info-text">
              <div className='info-item'>
                <svg width="20" height="33" viewBox="0 0 20 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12.5584 23.6413L18.0022 14.888C18.02 14.8597 18.0349 14.8299 18.0465 14.7991C18.9865 13.2661 19.4829 11.5149 19.4829 9.7271C19.4829 4.36358 15.1193 0 9.75578 0C4.39226 0 0.0283205 4.36358 0.0283205 9.7271C0.0283205 11.5153 0.525387 13.2672 1.46614 14.8012C1.47704 14.8281 1.48975 14.8542 1.505 14.8797L6.75341 23.6631C2.67922 24.239 0 25.9142 0 27.9464C0 30.4644 4.27898 32.4364 9.74126 32.4364C15.2035 32.4364 19.4825 30.4641 19.4825 27.9464C19.4829 25.9048 16.6788 24.1921 12.5584 23.6413ZM2.44394 14.3107C1.57616 12.9295 1.11758 11.3446 1.11758 9.7271C1.11758 4.96412 4.99244 1.08926 9.75578 1.08926C14.5188 1.08926 18.3936 4.96412 18.3936 9.7271C18.3936 11.3454 17.935 12.9302 17.0676 14.3107C17.0495 14.3398 17.0346 14.3699 17.0226 14.4011L11.2713 23.6478C11.1849 23.7804 11.1678 23.8105 11.0622 23.9841L9.60982 26.3194L2.49259 14.4087C2.47988 14.375 2.46354 14.3419 2.44394 14.3107ZM9.74162 31.3471C4.64279 31.3471 1.08962 29.5545 1.08962 27.9464C1.08962 26.4868 3.76557 25.1114 7.36485 24.6855L9.13309 27.6451C9.23076 27.8081 9.40576 27.9087 9.59566 27.9101C9.59711 27.9101 9.59893 27.9101 9.60038 27.9101C9.78846 27.9101 9.96346 27.8128 10.063 27.6531L11.922 24.6641C15.5786 25.0603 18.3933 26.4705 18.3933 27.9464C18.3936 29.5549 14.8404 31.3471 9.74162 31.3471Z"
                    fill="#454545" />
                  <path
                    d="M13.2782 9.72708C13.2782 7.77694 11.6916 6.19025 9.74142 6.19025C7.79128 6.19025 6.20459 7.77694 6.20459 9.72708C6.20459 11.6772 7.79128 13.2639 9.74142 13.2639C11.6916 13.2639 13.2782 11.6772 13.2782 9.72708ZM7.29385 9.72708C7.29385 8.37748 8.39183 7.27951 9.74142 7.27951C11.091 7.27951 12.189 8.37748 12.189 9.72708C12.189 11.0767 11.0914 12.1746 9.74142 12.1746C8.39146 12.1746 7.29385 11.0767 7.29385 9.72708Z"
                    fill="#454545" />
                </svg>
                <p>Адрес</p>
                <a
                  href="https://yandex.uz/maps/10174/saint-petersburg-and-leningrad-oblast/house/pochtovy_proyezd_13/Z0kYcwJjSk0EQFtjfXp3dHpqbQ==/?ll=30.552372%2C59.666017&z=16.98">Сантк-Петербург,
                  п. Федоровское, Почтовый проезд 13</a>
              </div>
              <div className='info-item'>
                <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M27.76 23.2859C27.76 23.7676 27.6528 24.2627 27.425 24.7443C27.1972 25.226 26.9024 25.6809 26.5138 26.1091C25.8572 26.8316 25.1336 27.3534 24.3162 27.6879C23.5122 28.0224 22.6412 28.1964 21.7032 28.1964C20.3363 28.1964 18.8757 27.8753 17.3347 27.2196C15.7937 26.564 14.2527 25.6809 12.7251 24.5704C11.1681 23.4332 9.69893 22.1809 8.32985 20.824C6.97479 19.4619 5.72501 17.9993 4.59123 16.4487C3.49242 14.9234 2.60801 13.3981 1.96481 11.8862C1.3216 10.3608 1 8.90241 1 7.51089C1 6.60105 1.1608 5.73135 1.4824 4.92855C1.80401 4.11237 2.31321 3.36309 3.02342 2.69409C3.88102 1.85115 4.81903 1.43637 5.81064 1.43637C6.18584 1.43637 6.56104 1.51665 6.89604 1.67721C7.24445 1.83777 7.55265 2.07861 7.79385 2.42649L10.9027 6.80175C11.1439 7.13625 11.3181 7.44399 11.4387 7.73835C11.5593 8.01933 11.6263 8.30031 11.6263 8.55453C11.6263 8.87565 11.5325 9.19677 11.3449 9.50451C11.1707 9.81225 10.9161 10.1334 10.5945 10.4545L9.57606 11.5115C9.42866 11.6587 9.36166 11.8326 9.36166 12.0467C9.36166 12.1538 9.37506 12.2474 9.40186 12.3545C9.44206 12.4615 9.48226 12.5418 9.50906 12.6221C9.75027 13.0636 10.1657 13.6389 10.7553 14.3347C11.3583 15.0305 12.0015 15.7396 12.6983 16.4487C13.4219 17.1579 14.1187 17.8135 14.8289 18.4156C15.5257 19.0043 16.1019 19.4057 16.5575 19.6466C16.6245 19.6733 16.7049 19.7135 16.7987 19.7536C16.9059 19.7937 17.0131 19.8071 17.1337 19.8071C17.3615 19.8071 17.5357 19.7268 17.6831 19.5797L18.7015 18.5762C19.0365 18.2417 19.3581 17.9874 19.6663 17.8269C19.9745 17.6396 20.2827 17.5459 20.6177 17.5459C20.8723 17.5459 21.1404 17.5994 21.4352 17.7198C21.73 17.8403 22.0382 18.0142 22.3732 18.2417L26.8086 21.386C27.157 21.6268 27.3982 21.9078 27.5456 22.2423C27.6796 22.5768 27.76 22.9113 27.76 23.2859Z"
                    stroke="#454545" strokeWidth="1.21636" strokeMiterlimit="10" />
                </svg>
                <p>Телефон</p>
                <a href="tel:+79650014371">+7 (965) 001-43-71 (Вопросы по натуральному камню и его наличию)</a>
              </div>
              <div className='info-item'>
                <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4.12497 5.59277V1.46766C4.12497 0.897588 4.58616 0.436401 5.15637 0.436401C5.72631 0.436401 6.1875 0.897588 6.1875 1.46766V5.59277C6.1875 6.16271 5.72631 6.6239 5.15637 6.6239C4.58616 6.62396 4.12497 6.16271 4.12497 5.59277ZM21.6565 6.62396C22.2263 6.62396 22.6877 6.16278 22.6877 5.59284V1.46766C22.6877 0.897588 22.2263 0.436401 21.6565 0.436401C21.0864 0.436401 20.6249 0.897588 20.6249 1.46766V5.59277C20.6249 6.16271 21.0864 6.62396 21.6565 6.62396ZM33 25.1862C33 29.7428 29.3062 33.4365 24.75 33.4365C20.1942 33.4365 16.5 29.7428 16.5 25.1862C16.5 20.6304 20.1941 16.9364 24.75 16.9364C29.3062 16.9364 33 20.6304 33 25.1862ZM30.9378 25.1862C30.9378 21.7747 28.1622 18.9988 24.7501 18.9988C21.3382 18.9988 18.5626 21.7746 18.5626 25.1862C18.5626 28.5985 21.3382 31.3739 24.7501 31.3739C28.1622 31.3739 30.9378 28.5985 30.9378 25.1862ZM8.25008 12.8115H4.12497V16.9364H8.25008V12.8115ZM4.12497 23.124H8.25008V18.9988H4.12497V23.124ZM10.3125 16.9364H14.4376V12.8115H10.3125V16.9364ZM10.3125 23.124H14.4376V18.9988H10.3125V23.124ZM2.06259 24.9812V10.7489H24.7501V14.874H26.8126V6.8295C26.8126 5.57665 25.8134 4.56138 24.5789 4.56138H23.7188V5.59284C23.7188 6.7287 22.7941 7.65529 21.6565 7.65529C20.5186 7.65529 19.594 6.7287 19.594 5.59284V4.56138H7.21869V5.59284C7.21869 6.7287 6.29421 7.65529 5.15644 7.65529C4.0184 7.65529 3.09385 6.7287 3.09385 5.59284V4.56138H2.23473C1.00018 4.56138 0 5.57665 0 6.8295V24.9813C0 26.23 1.00018 27.2492 2.23473 27.2492H14.4376V25.1863H2.23473C2.14128 25.1862 2.06259 25.0897 2.06259 24.9812ZM20.6249 16.9364V12.8115H16.5001V16.9364H20.6249ZM27.8438 25.1862H24.75V22.0924C24.75 21.5227 24.2888 21.0615 23.7187 21.0615C23.1486 21.0615 22.6877 21.5227 22.6877 22.0924V26.2178C22.6877 26.7877 23.1486 27.2491 23.7187 27.2491H27.8438C28.4139 27.2491 28.8751 26.7877 28.8751 26.2178C28.8751 25.6478 28.4139 25.1862 27.8438 25.1862Z"
                    fill="#454545" />
                </svg>
                <p>Время работы</p>
                <a href="#">Пн - Сб с 9:00 до 18:00</a>
              </div>
              <div className='info-item'>
                <svg width="31" height="25" viewBox="0 0 31 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M29.9302 3.84349C29.8055 3.21551 29.5243 2.62198 29.1141 2.123C29.0307 2.01824 28.9436 1.92504 28.8483 1.8305C28.1185 1.09939 27.1033 0.680054 26.063 0.680054H3.94056C2.88861 0.680054 1.89925 1.08882 1.15473 1.83091C1.0605 1.92457 0.973126 2.0187 0.886631 2.12679C0.478183 2.62368 0.198247 3.21639 0.0765327 3.84525C0.0256672 4.0922 0 4.34809 0 4.60695L0 20.0897C0 20.6283 0.109818 21.1528 0.32752 21.6514C0.515922 22.0943 0.801777 22.5141 1.1545 22.8654C1.24333 22.9535 1.33159 23.0348 1.42582 23.114C2.13102 23.696 3.02398 24.0162 3.94056 24.0162H26.063C26.9855 24.0162 27.8775 23.6948 28.5809 23.1076C28.6749 23.0318 28.762 22.9522 28.8491 22.8654C29.1901 22.526 29.4611 22.136 29.6558 21.706L29.6815 21.6447C29.8952 21.1555 30.0036 20.6327 30.0036 20.0897V4.60695C30.0036 4.35147 29.9789 4.09389 29.9302 3.84349ZM2.04066 3.18614C2.09639 3.10485 2.16753 3.02141 2.2583 2.93025C2.70888 2.48149 3.30644 2.23453 3.9405 2.23453H26.0629C26.7025 2.23453 27.3003 2.48189 27.7459 2.93113C27.8228 3.00862 27.8963 3.09464 27.9604 3.18059L28.1296 3.40717L16.3215 13.6623C15.9575 13.9803 15.4888 14.1553 15.0016 14.1553C14.5193 14.1553 14.051 13.9807 13.6827 13.6627L1.88636 3.41009L2.04066 3.18614ZM1.56787 20.2264C1.56148 20.1842 1.56001 20.1374 1.56001 20.0897V4.92754L10.7234 12.8933L1.65249 20.7744L1.56787 20.2264ZM27.2435 22.1491C26.8888 22.3531 26.4804 22.4612 26.063 22.4612H3.94056C3.52291 22.4612 3.11464 22.3531 2.76022 22.1491L2.38939 21.935L11.7618 13.7959L12.7889 14.6862C13.4051 15.2192 14.1908 15.5131 15.0018 15.5131C15.8157 15.5131 16.6027 15.2192 17.2185 14.6862L18.2452 13.7955L27.6144 21.9354L27.2435 22.1491ZM28.4432 20.0897C28.4432 20.1366 28.4423 20.1829 28.4364 20.2242L28.3552 20.7773L19.2804 12.8975L28.4432 4.9314V20.0897Z"
                    fill="#454545" />
                </svg>
                <p>E-mail</p>
                <a href="mailto:info@vkamne.com">info@vkamne.com</a>
              </div>
              <div className="info-item">
                <p>Следи за нами в соц сетях:</p>
                <div>
                  <a href='http://t.me/vkamnecom' target='_blank'>
                    <svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd"
                        d="M2.23197 8.03004C7.95849 5.52509 11.7864 3.90604 13.685 3.11179C19.1359 0.851228 20.269 0.454102 21.0039 0.454102C21.1571 0.454102 21.5245 0.48465 21.7695 0.667939C21.9533 0.820679 22.0145 1.03452 22.0451 1.18726C22.0758 1.34 22.1064 1.67603 22.0758 1.95096C21.7695 5.03632 20.514 12.5817 19.8403 16.0336C19.5647 17.5 19.0134 17.9887 18.4928 18.0498C17.3598 18.1415 16.4717 17.2861 15.3693 16.5835C13.6544 15.4532 12.6745 14.7506 10.9902 13.6509C9.06092 12.3679 10.3165 11.6653 11.4189 10.535C11.6945 10.2295 16.7473 5.67783 16.8392 5.25016C16.8392 5.18906 16.8698 5.00577 16.7473 4.91413C16.6248 4.82248 16.4717 4.85303 16.3492 4.88358C16.1655 4.91413 13.4094 6.74702 8.05036 10.3517C7.25416 10.9016 6.54983 11.1459 5.90674 11.1459C5.20241 11.1459 3.85499 10.7488 2.84443 10.4128C1.61951 10.0157 0.639567 9.80183 0.731437 9.12977C0.823306 8.76319 1.31328 8.39662 2.23197 8.03004Z"
                        fill="#A19A9A" />
                    </svg>
                  </a>
                  <a href="https://wa.me/89650014371" target='_blank'>
                    <svg fill="#A19A9A" width="23" height="19" version="1.1" id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 308 308" xmlSpace="preserve">
                      <g id="XMLID_468_">
                        <path id="XMLID_469_" d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156
		c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687
		c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887
		c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153
		c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348
		c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802
		c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922
		c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0
		c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458
		C233.168,179.508,230.845,178.393,227.904,176.981z"/>
                        <path id="XMLID_470_" d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716
		c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396
		c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z
		 M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188
		l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677
		c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867
		C276.546,215.678,222.799,268.994,156.734,268.994z"/>
                      </g>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/vkamne_com?igsh=ZWNmYmhxMHFhaXV1">
                    <svg fill="#A19A9A" xmlns="http://www.w3.org/2000/svg" width="23" height="19" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                  </a>
                  <a href="https://vk.com/spbvkamne">
                    <svg fill="#A19A9A" xmlns="http://www.w3.org/2000/svg" width="24" height="19" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.581 15.997c.304 0 .429-.204.425-.458-.016-.958.356-1.474 1.03-.802.744.744.896 1.26 1.801 1.26h1.601c.403 0 .562-.13.562-.334 0-.432-.711-1.194-1.312-1.752-.844-.783-.882-.802-.156-1.744.9-1.169 2.079-2.667 1.037-2.667h-1.991c-.387 0-.414.217-.551.542-.498 1.173-1.443 2.693-1.803 2.461-.377-.243-.204-1.203-.175-2.63.008-.377.006-.636-.571-.77-.314-.073-.621-.103-.903-.103-1.137 0-1.922.477-1.477.56.785.146.711 1.846.527 2.58-.319 1.278-1.518-1.012-2.018-2.152-.12-.275-.155-.488-.586-.488h-1.627c-.247 0-.394.08-.394.258 0 .301 1.479 3.36 2.892 4.885 1.379 1.487 2.742 1.354 3.689 1.354z" /></svg>
                  </a>
                  <a href="https://www.facebook.com/vkamne?mibextid=ZbWKwL">
                    <svg fill="#A19A9A" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="info-map">
              <iframe src="https://yandex.com/map-widget/v1/?um=constructor%3A50b6cc0bb34e455ec6a7168ecb8673b2c1e6aaace3d0d977bc840e6ecaaba705&amp;source=constructor" width="500" height="400" frameBorder="0"></iframe>
            </div>
          </div>
        </div>
      </section>
      <div className="contacts-bottom">
        <img className='contacts-left' src={contactsLeft} alt="" />
        <img src={contactsRight} className='contacts-right' alt="" />
        <div className="container">
          <Consultation />
        </div>
      </div>
    </div>
  );
};

export default Contacts;