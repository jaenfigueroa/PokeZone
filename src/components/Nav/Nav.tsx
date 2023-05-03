import './Nav.scss'
import {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'

type Props = {
  numero: number,
  url: string,
  ultimaPagina: number
}

/////////////////////////////////////////
export const Nav = ({numero, url, ultimaPagina}:Props) => {

  const [numeroInicio, setNumeroInicio] = useState(1)

  window.scrollTo(0, -1000)

  //HOOKS: USE EFFECT
  useEffect(()=>{

    if (
      numero === 1 ||
      numero === 2 ||
      numero === 3 ||
      numero === 4 ||
      numero === 5 ||
      numero === 6 ||
      numero === 7
    ) { /* numero === 3 */
      setNumeroInicio(1)

    } else if (
      numero === (ultimaPagina - 6) ||
      numero === (ultimaPagina - 5) ||
      numero === (ultimaPagina - 4) ||
      numero === (ultimaPagina - 3) ||
      numero === (ultimaPagina - 2) ||
      numero === (ultimaPagina - 1) ||
      numero === (ultimaPagina)){

      setNumeroInicio(ultimaPagina - 12) /* 4 */

    } else{
      setNumeroInicio(numero - 6) /* 2 */
    }

  }, [numero, ultimaPagina])

  const Pages = [
    numeroInicio,
    numeroInicio + 1,
    numeroInicio + 2,
    numeroInicio + 3,
    numeroInicio + 4,
    numeroInicio + 5,
    numeroInicio + 6,
    numeroInicio + 7,
    numeroInicio + 8,
    numeroInicio + 9,
    numeroInicio + 10,
    numeroInicio + 11,
    numeroInicio + 12,
  ]

  /////////////////////////////////////////////
  return (
    <nav className='inicio__paginacion'>
      <ul>
        {
          numeroInicio !== 1 && (
            <NavLink to={url + '1'} className='boton-paginacion'><i className='fa-solid fa-angle-left'></i></NavLink>
          )
        }
        {
          Pages.map((element, index) => (
            <NavLink key={index} to={`${url}${element}`} className={({isActive})=>isActive? 'boton-paginacion--activo': 'boton-paginacion'}> {element} </NavLink>
          ))
        }

        {
          numeroInicio !== (ultimaPagina - 12) && ( /* 4 */
            <NavLink to={url + ultimaPagina} className='boton-paginacion'><i className='fa-solid fa-chevron-right'></i></NavLink>
          )
        }
      </ul>
    </nav>
  )
}

