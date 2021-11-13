import React from 'react';
import './About.css';
import tecnologies from '../../media/tecnologies.png';
import 'animate.css';

const About = () => (
  <div id="about" className="about-container">
    <div className="about-desc">
      <h3>Te cuento sobre mi</h3>
      <p>
        Soy un desarrollador web con experiencia en contabilidad y negocios. Gracias a mis
        experiencias pasadas, he obtenido diferentes habilidades como: metodología en el trabajo,
        orden, creatividad, razonamiento lógico, toma de decisiones y trabajo en equipo, las cuales
        me han servido indiscutiblemente como desarrollador web.
      </p>
      <br />
      <h3>Tecnologías </h3>
      <p>
        Me he especializado en el área front-end, utilizando tecnologías que van desde HTML
        (estructura), pasando por CSS, Boostrap y SASS (diseño), hasta usar JavaScript como lenguaje
        de programación y ReactJs como librería.
      </p>
      <h3>Proyectos </h3>
      <p>
        En mis proyectos con ReactJs, he utilizado las últimas tecnologías como son: React Hooks,
        Redux, Firebase, Rutas (React Router), Stripe y más..
      </p>
    </div>
    <div className="about-img ">
      <img src={tecnologies} alt="david" width="400" height="400" />
    </div>
  </div>
);

export default About;
