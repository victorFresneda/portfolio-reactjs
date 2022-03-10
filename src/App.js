import React, { useEffect, useState } from 'react';
import './App.css';
import { About } from './cmponents/about/About';
import { Cover } from './cmponents/Covers/Cover';
import { Slider } from './cmponents/slider/Slider';
import { Navbar } from './cmponents/navBar/Navbar';
import { Info } from './cmponents/info/Info';
import { Footer } from './cmponents/footer/Footer';

function App() {

  const [scrollHeight, setScrollHeight] = useState(0);
  

  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [scrollHeight])
  
   
  
  return (
    <div className="App">
     <Navbar isScrolling={scrollHeight}/>
     <Cover />
     <About />
     <Slider />
     <Info />
     <Footer />
    </div>
  );
}

export default App;
