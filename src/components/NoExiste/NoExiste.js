import React from 'react'
import './NoExiste.css'

export const NoExiste = ({laBusqueda}) => {
  return (
    <p className='aviso-noexiste'>No existe pokemon: <span>{laBusqueda}</span></p>
  )
}
