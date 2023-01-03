import React, {useEffect, useState} from 'react'
import { Tarjeta } from '../Tarjeta/Tarjeta'
import './Favoritos.css'

export const Favoritos = () => {

  /* HOOK: USE STATE */
  let [listaFavoritos, setListaFavoritos] = useState([])

  /* HOOK: USE EFFECT */
  useEffect(()=>{

    //traer array de local storage
    let miLista = JSON.parse(localStorage.getItem('favoritos'))

    if (Array.isArray(miLista)) {
      setListaFavoritos(miLista)
    } else{
      setListaFavoritos([])
    }

  }, [])






  /////////////////////////////////////////////////
  return (
      
    <section className='inicio__contenedor'>

      {
        listaFavoritos.map((id)=>{
          return(

            <Tarjeta numero={id} key={id}/>
          )
        })
      }

    </section>
  )
}
