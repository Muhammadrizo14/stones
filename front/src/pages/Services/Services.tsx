import React, { useEffect, useState } from 'react';
import {ServiceT} from "../../@types";
import Header from "../../layouts/Header/Header";
import Projects from "../../components/Projects/Projects";
import axios from "axios";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import Empty from "../../components/Empty/Empty";
import { HOST_URL } from "../../assets/consts";
import "swiper/css";
import "swiper/css/pagination";
import './Services.scss'
import DynamicPage from "../../assets/dynamicPage";
import { useNavigate } from 'react-router-dom';
const Services = () => {
  let navigate = useNavigate()
  const [services, setServices] = useState<ServiceT[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [filteredServices, setFilteredServices] = useState<ServiceT[]>([])
  const [filter, setFilter] = useState('')


  useEffect(() => {
    setLoading(true)
    axios.get(`${HOST_URL}service`)
      .then((res: any) => {
        setLoading(false);
        setError(false);
        setServices(res.data);
        setFilteredServices(res.data)
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      })
  }, []);

    useEffect(() => {
        setFilteredServices(services.filter(item => item.interorekster.includes(filter)))
    }, [services, filter]);

  return (
    <div>
      <DynamicPage title={'Услуги'} />
      <Header />
      {loading && <Loading />}
      {error && <Error />}
      {!error && !loading ?
        filteredServices.length ?
          <Projects projects={filteredServices}>
            <h1 className="title">Услуги</h1>
            <div style={{display: 'flex', justifyContent: 'space-between', alignContent: 'center', flexWrap: 'wrap'}}>
              <div style={{ marginTop: 20 }}>
                <button className={`btn ${filter === 'Изделия в интерьере' ? 'grey' : 'grey-outline'}`} style={{ marginRight: 20 }} onClick={() => filter === 'Изделия в интерьере' ? setFilter('') : setFilter("Изделия в интерьере")}>Изделия в интерьере</button>
                <button className={`btn ${filter === 'Изделия в экстерьере' ? 'grey' : 'grey-outline'}`} onClick={() => filter === 'Изделия в экстерьере' ? setFilter('') : setFilter("Изделия в экстерьере")}>Изделия в экстерьере</button>
              </div>
              <button style={{ marginTop: 20 }} className='btn grey-outline' onClick={() => navigate('/portfolio')}>Портфолио</button>
            </div>
          </Projects> : <Empty />
        : null}

      <div className="container">
        <div className="activity" style={{ padding: '30px 0' }}>
          <h1 className="title">Деятельность</h1>
          <p className="grey-text" style={{ padding: '20px 0' }}>Камнеобрабатывающая компания "В КАМНЕ" занимается поставкой натурального камня с отечественных и зарубежных карьеров на свой склад (в наличие более 10 000 м2), проектированием, изготовлением и монтажом изделий, облицовкой пола и стен плитами мрамора, гранита, оникса, кварцита и известняка, реставрационными работами, облицовкой зданий «мокрым» способом, а также вентилируемыми фасадами.</p>
          <p className="grey-text">Мы изготавливаем и устанавливаем камины, лестницы, подоконники, столешницы, порталы, колонны, пилястры, архитрав и различные элементы декора. Наши специалисты занимаются архитектурным проектированием и моделированием каменных изделий, благодаря которому возможно не только воплощение дизайнерских решений, но и создание уникальных предметов интерьера.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;