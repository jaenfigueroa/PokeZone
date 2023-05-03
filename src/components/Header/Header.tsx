import './Header.scss'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next' /* i18n - IMPORTAR USE TRANSLATION */

/////////////////////////////////////////////////
export const Header = () => {

  /* HOOK: USE TRANSLATION */
  const { t } = useTranslation()

  const routes = ['inicio', 'todos', 'pokemon', 'favoritos']

  ///////////////////////////////////////
  return (
    <header className='header'>
      <div className='header__logo'>
        <h3>PokeZone</h3>
      </div>
      <nav className='header__nav'>
        <ul>
          {
            routes.map((element, index) => (
              <li key={index}>
                <NavLink
                  to={`/${element}`}
                  className={({isActive})=>isActive? 'elemento-activo':''}>{t(element)}</NavLink>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}
