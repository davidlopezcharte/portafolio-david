import React from 'react';
import './About.css';
import tecnologies from '../../media/tecnologies.png';
import 'animate.css';

const About = () => (
  <div id="about" className="about-container">
    <div className="about-desc">
      <h3>Te cuento sobre mi</h3>
      <p>
        Soy un desarrollador web, con excelentes habilidades sociales y de trabajo en equipo,
        especializado en desarrollo frontend para aplicaciones web, enfocadas en React.
      </p>
      <br />
      <h3>Tecnologías </h3>
      <p>
        Me he especializado en el área front-end, utilizando tecnologías que van desde HTML
        (estructura), pasando por CSS, Boostrap, SASS y TailwindCss (diseño), hasta usar JavaScript
        como lenguaje de programación, ReactJs como librería y NextJs como framework de ReactJs.
      </p>
      <h3>Proyectos </h3>
      <p>
        En mis proyectos con ReactJs, he utilizado las últimas tecnologías como son: React Hooks,
        Redux, Firebase, Rutas (React Router), Stripe y más...
      </p>
    </div>
    <div className="about-img ">
      <img src={tecnologies} alt="david" width="400" height="400" />
    </div>
  </div>
);

export default About;
