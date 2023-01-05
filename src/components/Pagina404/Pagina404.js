import React, { useEffect } from 'react'
import './Pagina404.css'
import { Link } from 'react-router-dom'

export const Pagina404 = () => {

  useEffect(()=>{
    document.getElementById('miVideo').play()
  })


  return (
    <div className='caja__error404'>

      <video  className='video' autoplay loop muted id='miVideo'>
        <source src="https://storage.googleapis.com/pgoblog/seasons-mythical-wishes/Hero%20Trailer/PGO_S9_Launch_16x9_WebHeader_v1.mp4" type="video/mp4"/>
      </video>

      <div className='caja__contenedor'>
        <h4 className='error404__titulo'>¡Ups! Página no encontrada</h4>
        <p className='error404__parrafo'>La página a la que intenta acceder no existe o ha sido movida.</p>
        <Link className='boton-primario boton-error' to='/inicio'>Ir a la pagina de inicio</Link>
      </div>
    </div>
  )
}
