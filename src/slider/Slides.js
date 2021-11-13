import React from 'react';
import './Slider.css';

const slidesInfo = [
  {
    img: 'https://i.ibb.co/SstHzxB/NetflixP.jpg',
    alt: 'Project 1',
    desc: 'Netflix-Clon',
    src: 'https://github.com/davidlopezcharte/Netflix-app',
    id: 1,
  },
  {
    img: 'https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg',
    alt: 'Project 2',
    desc: 'Project 2',
    src: 'https://twitter.com/notifications',
    id: 2,
  },
  {
    img: 'https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg',
    alt: 'Project 3',
    desc: 'Project 3',
    id: 3,
  },
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <br />
    <img src={slide.img} alt={slide.alt} />
    <div className="slide-desc">
      <a href={slide.src} target="_blank" rel="noreferrer">
        <span className="fab fa-github  git">
          <p className="slide-paragraph"> Code</p>
        </span>
      </a>
      <a href={slide.src} target="_blank" rel="noreferrer">
        <span className="fas fa-desktop visit">
          <p className="slide-paragraph"> Visit</p>
        </span>
      </a>
      {/* <span className="fab fa-github github"> Code</span> */}
    </div>
  </div>
));

export default slides;
