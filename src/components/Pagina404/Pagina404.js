import React from 'react'
import './Pagina404.css'
import { Link } from 'react-router-dom'

/* i18n - IMPORTAR USE TRANSLATION */
import { useTranslation } from 'react-i18next'

export const Pagina404 = () => {

  const {t} = useTranslation()


  return (
    <div className='caja__error404'>

      <div className='caja__contenedor'>
        <h4 className='error404__titulo'>{t('¡Ups! Página no encontrada')}</h4>
        <p className='error404__parrafo'>{t('La página a la que intenta acceder no existe o ha sido movida.')}</p>
        <Link className='boton-primario boton-error' to='/inicio'>{t('Ir a la pagina de inicio')}</Link>
      </div>
      
    </div>
  )
}
