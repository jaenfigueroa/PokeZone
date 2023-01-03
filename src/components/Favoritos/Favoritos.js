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
    <>
    
      {/* AVISO DE CANTIDAD DE RESULTADOS */}
      <div className='inicio__cantidad-resultados caja-favoritos__contador'>
        {/* Total de Resultados: <span className='resultados-numero'>{numeroResultados}</span> */}
        Total de Guardados: <span className='resultados-numero'>{listaFavoritos.length}</span>
      </div>

      {/* CAJA DE FAVORITOS */}
      <section className='inicio__contenedor caja-favoritos'>
        {
          listaFavoritos.map((id)=>{
            return(

              <Tarjeta numero={id} key={id}/>
            )
          })
        }

      </section>
    </>
  )
}
