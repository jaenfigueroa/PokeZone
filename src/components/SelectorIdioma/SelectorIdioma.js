import React, {useState} from 'react'
import './SelectorIdioma.css'

/* i18n (solo si necesito cambuar configuracion de i18n)*/
import i18n from '../../languages/i18n'

/* PARA USAR USE TRANSLATIOn (en todos los componentes)*/
import { useTranslation } from 'react-i18next'


///////////////////////////////////////////////////
export const SelectorIdioma = ({idioma, setIdioma}) => {

  /* HOOK: USE TRANSLATION */
  const { t } = useTranslation()

  const [selectorActivo] = useState(false)

  const activarSelector = () =>{
    document.getElementById('caja-selector').classList.toggle('contenedor-idioma--activo')
  }

  ////////////////////////////////////////////////

  return (
    <>
      <div className='caja-selector-idioma botonIdioma' onClick={()=>activarSelector()}>

        <p>{t('idioma')}</p>

        {/* ///////////////////////////// */}
        
        <div className='caja-contenedor-idiomas botonIdioma' id='caja-selector'>

        {
          selectorActivo && <i class="fa-solid fa-xmark icono-cerrar-idiomas"></i>
        }

          <p className='titulo'>{t('elige')}:</p>

          <button
            className='idioma botonIdioma'
            onClick={()=>{
              i18n.changeLanguage('es')
              localStorage.setItem('idioma', 'es')
              setIdioma('es')
            }}>
            <div className='imagen-bandera-es'></div>Español
          </button>

          <button
            className='idioma botonIdioma'
            onClick={()=>{
              i18n.changeLanguage('en')
              localStorage.setItem('idioma', 'en')
              setIdioma('en')
            }}>
            <div className='imagen-bandera-eeuu' ></div>English
          </button>

          <button
            className='idioma botonIdioma'
            onClick={()=>{
              i18n.changeLanguage('pt')
              localStorage.setItem('idioma', 'pt')
              setIdioma('pt')
            }}>
            <div className='imagen-bandera-pt' ></div>português
          </button>

        </div>
      </div>
    
    </>
  )
}
