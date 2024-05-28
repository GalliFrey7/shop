import React from 'react'
import { Link } from "react-router-dom"
import FOOTER_CONTACT_INFO from '../assets/footer_contact'
import SOCIALS from '../assets/socials'

const Footer = () => {
  return (
    <footer className="container mx-auto px-4 pb-4">
    <div>
      <Link to="/" className="mb-10 bold-20 flexCenter" >Свяжитесь с нами</Link>
    </div>
    <div className="flex flex-wrap gap-8 sm:justify-between md:flex-1">
      
      <div>
        <FooterColumn >
          {FOOTER_CONTACT_INFO.links.map((link) => (
            <Link to='/' key={link.label}className='flex gap-4 md:flex-col lg:flex-row'>
            <p>{link.label}</p><p className='medium-14'>{link.value}</p>
            </Link>
          ))}
        </FooterColumn>
      </div>
      <div className='flex flexCenter'>
          <FooterColumn>
            <ul className='flex flexCenter gap-4 '>
              {SOCIALS.links.map((link) => 
              <Link to="/" key={link}><img src={link} alt='socialIcon' height={22} width={22}></img></Link>
              )}
            </ul>
          </FooterColumn>
      </div>
    </div>
  </footer>
  )
}

const FooterColumn = ({title, children }) => {
  return (
    <div>
      <h4>{title}</h4>
      {children}
    </div>
  )
}

export default Footer