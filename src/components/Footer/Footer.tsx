import { useLanguage } from '../../hooks/useLanguage'
import { SelectorIdioma } from '../SelectorIdioma/SelectorIdioma'
import './Footer.css'

/* HOOK: USE TRANSLATION */
import { useTranslation } from 'react-i18next'

export const Footer = () => {

  const {idioma, setIdioma} = useLanguage()
  const {t} = useTranslation()

  const redes = [
    {
      id: 1,
      url: 'https://www.facebook.com/JaenDeveloper/',
      icon: <i className='fa-brands fa-facebook'></i>
    },
    {
      id: 2,
      url: 'https://twitter.com/JaenFigueroa_',
      icon: <i className='fa-brands fa-twitter'></i>
    },
    {
      id: 3,
      url: 'https://github.com/jaenfigueroa',
      icon: <i className='fa-brands fa-github'></i>
    },
    {
      id: 4,
      url: 'https://api.whatsapp.com/send?phone=51916995780',
      icon: <i className='fa-brands fa-whatsapp'></i>
    },
    {
      id: 5,
      url: 'https://www.linkedin.com/in/jaenfigueroa/',
      icon: <i className='fa-brands fa-linkedin'></i>
    },
    {
      id: 6,
      url: 'mailto:contact@jaenfigueroa.com',
      icon: <i className='fa-solid fa-envelope'></i>
    }
  ]

  return (
    <footer className='footer'>

      <img className='imagen-footer' src='https://lh3.googleusercontent.com/9FHOk79iiGEisBJxkU9smRi8CUKagEkt_yl7T7z9mEBHypSg5sblsGkv1YOxj-4vCpVbYUeo7dC6q2rxiHn9fNlcBxXGabLd7RpsNC6MHrwCRw=rw-e365-w1440' alt='imagen de pikachu y sus amigos'></img>
      <p>{t('derechos')} <a href='https://github.com/jaenfigueroa/PokeZone' target='_blank' rel='noreferrer'>Jaen Figueroa</a> &copy; 2023</p>

      <div className='footer__redes-contenedor'>
        {
          redes.map(element => (
            <a href={element.url} target='_blank' rel='noreferrer' key={element.id}>{element.icon}</a>
          ))
        }
      </div>

      <SelectorIdioma idioma={idioma} setIdioma ={setIdioma}/>
    </footer>
  )
}
