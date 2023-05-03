import React, { useState} from 'react'
// import { useNavigate } from 'react-router-dom'
import './Tarjeta.css'
import {BarLoader} from "react-spinners";

////////////////////////////////////////////////////////////
export const Tarjeta = ({id, nombre, urlImagen}) => {

  // const navigate = useNavigate()
  const [cargando, setCargando] = useState(true)


  //////////////////////////////
  return (
    <div className='tarjeta_pokemon_individual'>
      <div>
        {
          cargando && (
            <>
            <div className='imagen'>
              <BarLoader color='#fff' className='tarjeta__img'/>
            </div>
            </>
          )
        }
        <img
          className='imagen'
          src={urlImagen}
          alt='imagen de la evolucion del pokemon'
          onLoad={()=> setCargando(false)}
          style={{ display: cargando ? 'none' : 'flex' }}/>

        { nombre&& <p>{nombre}</p> }
        
      </div>
    </div>
  )
}
