import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <footer className='footer'>
      <p>Developed by <a href='https://www.jaenfigueroa.com' target='_blank' rel="noreferrer">Jaen Figueroa</a> &copy; 2023</p>

      <div className='footer__redes-contenedor'>
        <a href='https://www.facebook.com/JaenDeveloper/' target='_blank' rel="noreferrer"><i className="fa-brands fa-facebook"></i></a>
        <a href='https://twitter.com/JaenFigueroa_' target='_blank' rel="noreferrer"><i className="fa-brands fa-twitter"></i></a>
        <a href='https://github.com/jaenfigueroa' target='_blank' rel="noreferrer"><i className="fa-brands fa-github"></i></a>
        <a href='https://api.whatsapp.com/send?phone=51916995780' target='_blank' rel="noreferrer"><i className="fa-brands fa-whatsapp"></i></a>
        <a href='https://www.linkedin.com/in/jaenfigueroa/' target='_blank' rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
        <a href='mailto:contact@jaenfigueroa.com' target='_blank' rel="noreferrer"><i className="fa-solid fa-envelope"></i></a>
      </div>
    </footer>
  )
}
