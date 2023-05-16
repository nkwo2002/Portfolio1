import React from 'react'
import './header.css'
import CTA from './CTA'
import headerSocial from './headerSocial'
export default function Header() {
  return (
    <div className='info'>
      <h5>Hello I'm</h5>
      <h1>Nkwo Brainie</h1>
      <h5 className='text-light'>Software Engineer in fet </h5>
      <CTA />
      <div className='my_image'>
       <headerSocial />
        <img src="" alt="" />
        </div>
      <a href='#contact' className='scroll__down'>Scroll down</a>
    </div>
  )
}
