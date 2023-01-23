import React from 'react'
import { SelectorIdioma } from '../SelectorIdioma/SelectorIdioma'
import './Footer.css'

/* HOOK: USE TRANSLATION */
import { useTranslation } from 'react-i18next'


export const Footer = ({idioma, setIdioma}) => {

  const {t} = useTranslation()

  return (
    <footer className='footer'>

      <img className='imagen-footer' src='https://lh3.googleusercontent.com/9FHOk79iiGEisBJxkU9smRi8CUKagEkt_yl7T7z9mEBHypSg5sblsGkv1YOxj-4vCpVbYUeo7dC6q2rxiHn9fNlcBxXGabLd7RpsNC6MHrwCRw=rw-e365-w1440' alt='imagen de pikachu y sus amigos'></img>
      <p>{t('derechos')} <a href='https://github.com/jaenfigueroa' target='_blank' rel="noreferrer">Jaen Figueroa</a> &copy; 2023</p>

      <div className='footer__redes-contenedor'>
        <a href='https://www.facebook.com/JaenDeveloper/' target='_blank' rel="noreferrer"><i className="fa-brands fa-facebook"></i></a>
        <a href='https://twitter.com/JaenFigueroa_' target='_blank' rel="noreferrer"><i className="fa-brands fa-twitter"></i></a>
        <a href='https://github.com/jaenfigueroa' target='_blank' rel="noreferrer"><i className="fa-brands fa-github"></i></a>
        <a href='https://api.whatsapp.com/send?phone=51916995780' target='_blank' rel="noreferrer"><i className="fa-brands fa-whatsapp"></i></a>
        <a href='https://www.linkedin.com/in/jaenfigueroa/' target='_blank' rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
        <a href='mailto:contact@jaenfigueroa.com' target='_blank' rel="noreferrer"><i className="fa-solid fa-envelope"></i></a>
      </div>


      <SelectorIdioma idioma={idioma} setIdioma ={setIdioma}/>
    </footer>
  )
}
