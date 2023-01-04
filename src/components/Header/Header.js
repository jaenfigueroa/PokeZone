import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

export const Header = () => {
  return (
    <header className='header'>

      <div className='header__logo'>
        <h3>PokeApi</h3>
      </div>

      <nav className='header__nav'>
        <ul>
        <li>
            <NavLink
              to='/busqueda'
              className={({isActive})=>isActive? 'elemento-activo':''}>Inicio</NavLink>
          </li>
          <li>
            <NavLink
              to='/inicio'
              className={({isActive})=>isActive? 'elemento-activo':''}>Todos</NavLink>
          </li>
          <li>
            <NavLink 
              to='/pokemon' 
              className={({isActive})=>isActive? 'elemento-activo':''}>Pokemon</NavLink>
          </li>
          <li>
            <NavLink 
              to='/favoritos' 
              className={({isActive})=>isActive? 'elemento-activo':''}>Favs</NavLink>
          </li>
        </ul>
      </nav>

    </header>
  )
}
