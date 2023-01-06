import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

/* i18n - IMPORTAR USE TRANSLATION */
import { useTranslation } from 'react-i18next'

/////////////////////////////////////////////////
export const Header = () => {

  /* HOOK: USE TRANSLATION */
  const { t } = useTranslation()


  ///////////////////////////////////////
  return (
    <header className='header'>

      <div className='header__logo'>
        <h3>PokeZone</h3>
      </div>

      <nav className='header__nav'>
        <ul>
        <li>
            <NavLink
              to='/inicio'
              className={({isActive})=>isActive? 'elemento-activo':''}>{t('inicio')}</NavLink>
          </li>
          <li>
            <NavLink
              to='/todos'
              className={({isActive})=>isActive? 'elemento-activo':''}>{t('todos')}</NavLink>
          </li>
          <li>
            <NavLink 
              to='/pokemon' 
              className={({isActive})=>isActive? 'elemento-activo':''}>Pokemon</NavLink>
          </li>
          <li>
            <NavLink 
              to='/favoritos' 
              className={({isActive})=>isActive? 'elemento-activo':''}>{t('favoritos')}</NavLink>
          </li>
        </ul>
      </nav>

    </header>
  )
}
