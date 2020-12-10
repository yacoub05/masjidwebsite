import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>بسم الله الرحمن الرحيم</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {/* <CardItem
              src=''
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path=''
            /> */}
            <CardItem
              src=''
              text='About us'
              label='Luxury'
              path=''
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src=''
              text='Education'
              label='Mystery'
              path=''
            />
            <CardItem
              src=''
              text='Social'
              label='Adventure'
              path=''
            />
            <CardItem
              src=''
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path=''
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;