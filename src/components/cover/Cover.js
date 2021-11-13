import React from 'react';
import './Cover.css';
import coverVideo from '../../media/coverVideo.mp4';

export const Cover = () => (
  <div id="cover" className="cover-container">
    <video className="video" src={coverVideo} autoPlay loop muted />
    <h1>David López Charte</h1>
    <p>Desarrollador Web</p>
  </div>
);
