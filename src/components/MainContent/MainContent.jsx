import React, { useState, useEffect } from 'react';
import './MainContent.css';
import HomeView from '../HomeView/HomeView';
import Kalkulator from '../Kalkulator/Kalkulator';
import Maper from '../Maper/Maper';

function MainContent() {
  const [activeSegment, setActiveSegment] = useState('home');



  const handleButtonClick = (segment) => {
    setActiveSegment(segment);
    localStorage.setItem('activeSegment', segment);
  };

  return (
    <section id='maincontent'>
      <div className="programs">
        <button className='btn homeBTN' onClick={() => handleButtonClick('home')}>Home</button>
        <button className='btn' onClick={() => handleButtonClick('kalkulator')}>Kalkulator</button>
        <button className='btn' onClick={() => handleButtonClick('maper')}>Maper</button>        
      </div>
      
      {activeSegment === 'kalkulator' && <Kalkulator />}
      {activeSegment === 'home' && <HomeView />}
      {activeSegment === 'maper' && <Maper />}
    </section>
  );
}

export default MainContent;
