import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HomeSection.css';
import quranvideo from '../assets/quranvideo.mp4'

function HomeSection() {
  return (
    <div className='hero-container'>
      <video src={quranvideo} autoPlay loop muted />
      <h1>Masjid Salam</h1>
      <p>This day have I perfected for you your religion and completed my favor on you and chosen for you Islam as a religion. (Qur’an, 5:3)</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
    
      </div>
    </div>
  );
}

export default HomeSection;