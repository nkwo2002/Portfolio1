import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '.././../assets/me.jpg'
import headerSocial from './headerSocial'
export default function Header() {
  return (
    <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Nkwo Brainie</h1>
      <h5 className='text-light'>SOFTWARE ENGINEER IN FET
      AND FRONT END DEVELOPER </h5>
      <CTA />
      <div className='me'>
       <headerSocial />
        <img src= {me} alt="" />
        </div>
      <a href='#contact' className='scroll__down'>Scroll down</a>
    </div>
    
  );
};
