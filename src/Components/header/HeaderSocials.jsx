import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { SiFrontendmentor } from 'react-icons/si'
import {FaGithub} from 'react-icons/fa'


const HeaderSocials = () => {
    return (
        <div className='header__socials'>
          <a href="https://linkedin.com" targer="_blank"><BsLinkedin /></a>
          <a href="https://github.com" targer="_blank"><FaGithub /></a>
          <a href="https://frontendmentor.io" targer="_blank"><SiFrontendmentor /></a>
        </div>
  )
}

export default HeaderSocials