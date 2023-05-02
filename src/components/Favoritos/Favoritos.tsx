import React, {useEffect, useState} from 'react'
import { Tarjeta } from '../Tarjeta/Tarjeta'
import './Favoritos.css'
import Sortable from 'sortablejs'; /* ESTO DEBERIA IMPORTARSE, PERO POR AHORA ESTA COMENTADO */

/* i18n - IMPORTAR USE TRANSLATION */
import { useTranslation } from 'react-i18next'

////////////////////////////////////////
export const Favoritos = ({idioma}) => {

  /* i18n */
  const {t} = useTranslation()

  /* HOOK: USE STATE */
  let [listaFavoritos, setListaFavoritos] = useState([])
  let [cantidad, setCantidad] = useState(0)

  /* HOOK: USE EFFECT */
  useEffect(()=>{

    //traer array de local storage
    let miLista = JSON.parse(localStorage.getItem('favoritos'))


    if (Array.isArray(miLista)) {
      setListaFavoritos(miLista)
      setCantidad(miLista.length)
      
    } else{
      setListaFavoritos([])
    }


  }, [])



  // useEffect(()=>{

  //   /* SORTABLE DRAG */
  //   let cajaFavs = document.getElementById('caja-favs')
  
  //   // Sortable.create(cajaFavs);


  //   new Sortable(cajaFavs, {
  //     group: 'shared', // set both lists to same group
  //     animation: 300,

  //     chosenClass: 'tarjeta-seleccionado',
  //     // dragClass: 'tarjeta-invisible',
  //     // filter: '.tarjeta-verde' ,
  //     handle: '.icono-drag',

  //     /////////////////////
  //     /////////////////////
  //     onEnd: function (evento) {

  //       // Actualiza el array con el nuevo orden de los elementos
  //       setListaFavoritos((listaFavoritos)=>{
          
  //         document.getElementById('audio_cambiar').play()

  //         //sacamos los indices
  //         let indiceAntes = evento.oldIndex
  //         let indiceNuevo = evento.newIndex

  //         //ACTUALIZAMOS EN ARREGLO
  //         ////////////
  //         let elemento = listaFavoritos.splice(indiceAntes, 1);
  //         let grupo = listaFavoritos.splice(0, indiceNuevo)

          
  //         let actualizado = [...grupo, ...elemento, ...listaFavoritos]
  //         ////////////

  //         //guardar el nuevo arreglo el local storage
  //         localStorage.setItem('favoritos', JSON.stringify([...actualizado]))

  //         //guardar el nuevo arreglo al estado
  //         return [...actualizado]
  //       })
  //     }
  //     /////////////////////
  //     /////////////////////
  // });

  // }, [])


  /* AUDIO */
  // useEffect(()=>{
  //   return(()=>{
  //     document.getElementById('audio_cambiar').play()
  //   })
  // }, [])

  /////////////////////////////////////////////////
  return (
    <>
    
      {/* AVISO DE CANTIDAD DE RESULTADOS */}
      <div className='inicio__cantidad-resultados caja-favoritos__contador'>
        {/* Total de Resultados: <span className='resultados-numero'>{numeroResultados}</span> */}
        {t('Total de Favoritos')}: <span className='resultados-numero'>{cantidad}</span>
      </div>


        {/* CAJA DE FAVORITOS */}
        <section className='inicio__contenedor caja-favoritos' id='caja-favs'>
          {
            listaFavoritos.map((id)=>{
              return(

                <Tarjeta numero={id} key={id} drag={true} setCantidad={setCantidad} idioma={idioma}/>
              )
            })
          }

        </section>


    </>
  )
}
