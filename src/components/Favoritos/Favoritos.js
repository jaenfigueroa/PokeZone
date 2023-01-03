import React, {useEffect, useState} from 'react'
import { Tarjeta } from '../Tarjeta/Tarjeta'
import './Favoritos.css'
import Sortable from 'sortablejs';

export const Favoritos = () => {

  /* HOOK: USE STATE */
  let [listaFavoritos, setListaFavoritos] = useState([])

  let [cantidad, setCantidad] = useState(0)

  /* HOOK: USE EFFECT */
  useEffect(()=>{

    //traer array de local storage
    let miLista = JSON.parse(localStorage.getItem('favoritos'))

    if (Array.isArray(miLista)) {
      setListaFavoritos(miLista)
    } else{
      setListaFavoritos([])
    }

    setCantidad(miLista.length)

  }, [])



  useEffect(()=>{

    /* SORTABLE DRAG */
    let cajaFavs = document.getElementById('caja-favs')
  
    // Sortable.create(cajaFavs);


    new Sortable(cajaFavs, {
      group: 'shared', // set both lists to same group
      animation: 300,

      chosenClass: 'tarjeta-seleccionado',
      dragClass: 'tarjeta-invisible',
      // filter: '.tarjeta-verde' ,
      handle: '.icono-drag',

      /////////////////////
      /////////////////////
      onEnd: function (evento) {

        // Actualiza el array con el nuevo orden de los elementos
        setListaFavoritos((listaFavoritos)=>{
          
          //sacamos los indices
          let indiceAntes = evento.oldIndex
          let indiceNuevo = evento.newIndex

          //ACTUALIZAMOS EN ARREGLO
          ////////////
          let elemento = listaFavoritos.splice(indiceAntes, 1);
          let grupo = listaFavoritos.splice(0, indiceNuevo)

          
          let actualizado = [...grupo, ...elemento, ...listaFavoritos]
          ////////////

          //guardar el nuevo arreglo el local storage
          localStorage.setItem('favoritos', JSON.stringify([...actualizado]))

          //guardar el nuevo arreglo al estado
          return [...actualizado]
        })
      }
      /////////////////////
      /////////////////////
  });

  }, [])


  /////////////////////////////////////////////////
  return (
    <>
    
      {/* AVISO DE CANTIDAD DE RESULTADOS */}
      <div className='inicio__cantidad-resultados caja-favoritos__contador'>
        {/* Total de Resultados: <span className='resultados-numero'>{numeroResultados}</span> */}
        Total de Favoritos: <span className='resultados-numero'>{cantidad}</span>
      </div>


        {/* CAJA DE FAVORITOS */}
        <section className='inicio__contenedor caja-favoritos' id='caja-favs'>
          {
            listaFavoritos.map((id)=>{
              return(

                <Tarjeta numero={id} key={id} drag={true} setCantidad={setCantidad}/>
              )
            })
          }

        </section>


    </>
  )
}
