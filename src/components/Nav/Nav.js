import React, {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

/////////////////////////////////////////
export const Nav = ({numero, url, ultimaPagina}) => {

  const [numeroInicio, setNumeroInicio] = useState(1)

  
  window.scrollTo(0, -1000)
  
  //HOOKS: USE EFFECT
  useEffect(()=>{
    

    if (numero === 1 || numero === 2 || numero === 3) { /* numero === 3 */
      setNumeroInicio(1)

    } else if (
      numero === (ultimaPagina - 3) ||
      numero === (ultimaPagina - 2) ||
      numero === (ultimaPagina - 1) ||
      numero === (ultimaPagina)){

      setNumeroInicio(ultimaPagina - 6) /* 4 */
 
    } else{
      setNumeroInicio(numero - 3) /* 2 */
    }

  }, [numero, ultimaPagina])

  /////////////////////////////////////////////
  return (
    <nav className='inicio__paginacion'>
      <ul>
        {
          numeroInicio !== 1 && (
            <NavLink to={url + '1'} className='boton-paginacion'><i className="fa-solid fa-angle-left"></i></NavLink>
          )
        }

        <NavLink to={`${url}${numeroInicio + 0}`} className={({isActive})=>isActive? 'boton-paginacion--activo': 'boton-paginacion'}> {numeroInicio + 0} </NavLink>
        <NavLink to={`${url}${numeroInicio + 1}`} className={({isActive})=>isActive? 'boton-paginacion--activo': 'boton-paginacion'}> {numeroInicio + 1} </NavLink>
        <NavLink to={`${url}${numeroInicio + 2}`} className={({isActive})=>isActive? 'boton-paginacion--activo': 'boton-paginacion'}> {numeroInicio + 2} </NavLink>
        <NavLink to={`${url}${numeroInicio + 3}`} className={({isActive})=>isActive? 'boton-paginacion--activo': 'boton-paginacion'}> {numeroInicio + 3} </NavLink>
        <NavLink to={`${url}${numeroInicio + 4}`} className={({isActive})=>isActive? 'boton-paginacion--activo': 'boton-paginacion'}> {numeroInicio + 4} </NavLink>
        <NavLink to={`${url}${numeroInicio + 5}`} className={({isActive})=>isActive? 'boton-paginacion--activo': 'boton-paginacion'}> {numeroInicio + 5} </NavLink>
        <NavLink to={`${url}${numeroInicio + 6}`} className={({isActive})=>isActive? 'boton-paginacion--activo': 'boton-paginacion'}> {numeroInicio + 6} </NavLink>

        {
          numeroInicio !== (ultimaPagina - 6) && ( /* 4 */
            <NavLink to={url + ultimaPagina} className='boton-paginacion'><i className="fa-solid fa-chevron-right"></i></NavLink>
          )
        }
      </ul>
    </nav>
  )
}

