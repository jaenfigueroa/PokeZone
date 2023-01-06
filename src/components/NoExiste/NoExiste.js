import React from 'react'
import './NoExiste.css'

/* i18n - IMPORTAR USE TRANSLATION */
import { useTranslation } from 'react-i18next'

export const NoExiste = ({laBusqueda}) => {

  /* HOOK: USE TRANSLATION */
  const { t } = useTranslation()


  return (
    <p className='aviso-noexiste'>{t('no-existe')}: <span>{laBusqueda}</span></p>
  )
}
