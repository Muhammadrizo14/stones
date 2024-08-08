import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import './projects.scss';
import { HOST_URL } from '../../assets/consts';
import { PortfolioT } from '../../@types';

type ProjectsT = {
  projects: PortfolioT[];
  children: ReactNode;
};

const ProjectsPortfolio: React.FC<ProjectsT> = ({ children, projects }) => {
  return (
    <section className="projects">
      <div className="container">
        {children}
        <div className="projects-inner">
          {projects.map((project, i) => (
            <div key={i} className="project" style={{ backgroundImage: `url(${HOST_URL}upload/fayl/${project.uploadedFile[0]?.id})`, paddingBottom: '64px' }}>
              {project.uploadedFile && project.uploadedFile[0] && (
                <div>
                  <div className="project-bg"></div>
                  <h3>{project.title}</h3>
                  <Link className="btn" to={`/portfolio/${project.id}`}>
                    Подробнее
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPortfolio;