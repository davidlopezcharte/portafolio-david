import React from 'react';
import './Slider.css';

const slidesInfo = [
  {
    img: 'https://i.ibb.co/SstHzxB/NetflixP.jpg',
    alt: 'Project 1',
    desc: 'Netflix-Clon',
    srcGit: 'https://github.com/davidlopezcharte/Netflix-app',
    srcWeb: 'https://netflix-app-one.vercel.app/profile',
    id: 1,
  },
  {
    img: 'https://i.ibb.co/YZB8Nyv/breaking-bad-2.jpg',
    alt: 'Project 2',
    desc: 'Project 2',
    srcGit: 'https://github.com/davidlopezcharte/react-breakingbad-app',
    srcWeb: 'https://react-breakingbad-app.vercel.app/breakingbad',
    id: 2,
  },
  {
    img: 'https://i.ibb.co/d6rYgsP/Dise-o-sin-t-tulo-22.png',
    alt: 'Project 3',
    desc: 'Project 3',
    srcGit: 'https://github.com/davidlopezcharte/e-commerce-app',
    srcWeb: 'https://e-commerce-app-jet.vercel.app/',
    id: 3,
  },
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <br />
    <img src={slide.img} alt={slide.alt} />
    <div className="slide-desc">
      <a href={slide.srcGit} target="_blank" rel="noreferrer">
        <span className="fab fa-github  git">
          <p className="slide-paragraph"> Code</p>
        </span>
      </a>
      <a href={slide.srcWeb} target="_blank" rel="noreferrer">
        <span className="fas fa-desktop visit">
          <p className="slide-paragraph"> Visit</p>
        </span>
      </a>
    </div>
  </div>
));

export default slides;
