import React from 'react'
import './about.scss'
import Header from '../../layouts/Header/Header'
import Info from '../Main/Info/Info'
import DynamicPage from "../../assets/dynamicPage";
// import Partners from '../../components/Partners/Partners';

export default function About() {
  return (
    <div className='contanct'>
      <DynamicPage title='О нас' description='Наша компания является лидером в области работы с камнем. Мы предоставляем широкий спектр услуг по обработке, установке и реставрации камня.' />
      <Header />
      <div className="main" style={{ marginBottom: "20px" }}>
        <Info />
      </div>
    </div>
  )
}
