import React, { useEffect, useState } from 'react';
import { PortfolioT } from "../../@types";
import axios from "axios";
import { HOST_URL } from "../../assets/consts";
import DynamicPage from "../../assets/dynamicPage";
import Header from "../../layouts/Header/Header";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import Projects from "../../components/Projects/Projects";
import Empty from "../../components/Empty/Empty";
import ProjectsPortfolio from '../../components/PortfolioProject/Projects';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [portfolios, setPortfolios] = useState<PortfolioT[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true)
    axios.get(`${HOST_URL}profile`)
      .then((res: { data: PortfolioT[] }) => {
        setLoading(false);
        setError(false);
        setPortfolios(res.data);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      })
  }, []);
  return (
    <div>

      <DynamicPage title={'Услуги'} />
      <Header />
      {loading && <Loading />}
      {error && <Error />}
      {!error && !loading ?
        portfolios.length ?
          <ProjectsPortfolio projects={portfolios}>
            <h1 className="title">Портфолио</h1>
            <Link to={`/services`}><button className='btn grey-outline'>Вернуться в услуги</button></Link>
          </ProjectsPortfolio> : <Empty />
        : null}
    </div>
  );
};

export default Portfolio;