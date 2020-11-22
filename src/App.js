import React from 'react';
import './css/main.css';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import LogoHeader from './components/logo-header/LogoHeader';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

let isStandalone = false;

if (window.matchMedia('(display-mode: standalone)').matches) {
  isStandalone = true;
}

function App() {
  return (
    <div 
      className="App"
    >
      <LogoHeader />
      <div 
        className='push'
        style={{
          height: !isMobile || isStandalone ? '100vh' : '85vh'
        }}
       ></div>
      <About />
      <Projects />
      <Contact />
      <Footer />
      <Navbar />
      <Loader />
    </div>
  );
}

export default App;
