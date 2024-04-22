import React, { useState, useEffect } from 'react';
import './MainContent.css';
import HomeView from '../HomeView/HomeView';
import Kalkulator from '../Kalkulator/Kalkulator';
import Maper from '../Maper/Maper';

function MainContent() {
  const [activeSegment, setActiveSegment] = useState('home');

  useEffect(() => {
    const storedSegment = localStorage.getItem('activeSegment');
    if (storedSegment) {
      setActiveSegment(storedSegment);
    }
  }, []); 

  const handleButtonClick = (segment) => {
    setActiveSegment(segment);
    localStorage.setItem('activeSegment', segment);
  };

  return (
    <section id='maincontent'>
      <div className="programs">
        <button className='btn' onClick={() => handleButtonClick('home')}>Home</button>
        <button className='btn' onClick={() => handleButtonClick('kalkulator')}>Calculator</button>
        <button className='btn' onClick={() => handleButtonClick('maper')}>Maper</button>
         
      </div>
      
      {activeSegment === 'home' && <HomeView />}
      {activeSegment === 'kalkulator' && <Kalkulator />}
      {activeSegment === 'maper' && <Maper />}
    </section>
  );
}

export default MainContent;
