import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'

export default function headerSocial() {
return (
<div className='header__social'>
<a href='#'><i class="fa-brands fa-facebook"></i></a>
<a href='https://linkedin.com' target='blank'><BsLinkedin/> </a>
<a href='https://github.com' target='blank'><FaGithub/> </a>
<a href='https://facebook.com' target='blank'><FaFacebookF/> </a>

</div>
);
};