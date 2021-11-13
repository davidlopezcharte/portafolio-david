import React, { useEffect, useState } from 'react';
import './App.css';
import About from './components/about/About';
import { Cover } from './components/cover/Cover';
import { Footer } from './components/footer/Footer';
import { Info } from './components/info/Info';
import NavBar from './components/navBar/NavBar';
import Slider from './slider/Slider';

function App() {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [scrollHeight]);

  return (
    <div className="App">
      <div className="App">
        <NavBar isScrolling={scrollHeight} />
        <Cover />
        <About />
        <Slider />
        <Info />
        <Footer />
      </div>
    </div>
  );
}

export default App;
