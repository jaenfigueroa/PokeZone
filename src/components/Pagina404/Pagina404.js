import React from 'react'
import './Pagina404.css'
import { Link } from 'react-router-dom'

export const Pagina404 = () => {

  return (
    <div className='caja__error404'>

      <div className='caja__contenedor'>
        <h4 className='error404__titulo'>¡Ups! Página no encontrada</h4>
        <p className='error404__parrafo'>La página a la que intenta acceder no existe o ha sido movida.</p>
        <Link className='boton-primario boton-error' to='/inicio'>Ir a la pagina de inicio</Link>
      </div>
      
    </div>
  )
}
