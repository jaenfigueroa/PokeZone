import React, {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

/////////////////////////////////////////
export const Nav = ({numero}) => {

  const [numeroInicio, setNumeroInicio] = useState(1)

  //HOOKS: USE EFFECT
  useEffect(()=>{

    if (numero === 1 || numero === 2) {
      setNumeroInicio(1)

    } else if (numero === 71 || numero === 72){
      setNumeroInicio(68)
 
    } else{
      setNumeroInicio(numero - 2)
    }

  }, [numero])

  /////////////////////////////////////////////
  return (
    <nav className='inicio__paginacion'>
      <ul>
        {
          numeroInicio !== 1 && (
            <NavLink to='/inicio/1'className='boton-paginacion'><i className="fa-solid fa-angle-left"></i></NavLink>
          )
        }

        <NavLink to={`/inicio/${numeroInicio + 0}`} className={({isActive})=>isActive? 'boton-paginacion--activo': 'boton-paginacion'}> {numeroInicio + 0} </NavLink>
        <NavLink to={`/inicio/${numeroInicio + 1}`} className={({isActive})=>isActive? 'boton-paginacion--activo': 'boton-paginacion'}> {numeroInicio + 1} </NavLink>
        <NavLink to={`/inicio/${numeroInicio + 2}`} className={({isActive})=>isActive? 'boton-paginacion--activo': 'boton-paginacion'}> {numeroInicio + 2} </NavLink>
        <NavLink to={`/inicio/${numeroInicio + 3}`} className={({isActive})=>isActive? 'boton-paginacion--activo': 'boton-paginacion'}> {numeroInicio + 3} </NavLink>
        <NavLink to={`/inicio/${numeroInicio + 4}`} className={({isActive})=>isActive? 'boton-paginacion--activo': 'boton-paginacion'}> {numeroInicio + 4} </NavLink>

        {
          numeroInicio !== 68 && (
            <NavLink to='/inicio/72'className='boton-paginacion'><i className="fa-solid fa-chevron-right"></i></NavLink>
          )
        }
      </ul>
    </nav>
  )
}

