import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'
import { Nav } from '../Nav/Nav'
import { Pagina404 } from '../Pagina404/Pagina404'
import { Tarjeta } from '../Tarjeta/Tarjeta'
import './Inicio.css'

////////////////////////////////////////
export const Inicio = () => {
  
  //HOOKS: USE PARAMS
  const {numeroPagina} = useParams()

  //HOOKS: USE STATE
  let [pagina, setPagina] = useState(numeroPagina)
  // const [numeroResultados, setNumeroResultados] = useState(0)
  const [pokemones, setPokemones] = useState([])

  //HOOKS: USE EFFECT
  useEffect(()=>{
    setPagina(numeroPagina)

  }, [numeroPagina])


  useEffect(()=>{

    const traerLista = async ()=>{
      try {
        const peticion = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${(pagina * 9) - 9}&limit=9`)
        const data = await peticion.json()

        // setNumeroResultados(data.count)
        setPokemones(data.results)

        // console.log(data.results);
      } catch (error) {
        console.log(error)
      }
    }

    traerLista()

  }, [pagina])


  ///////////////////////////////////////

  if (pagina >= 1 && pagina <= 72 ) {
    
    return (
      <div>
        {/* AVISO DE CANTIDAD DE RESULTADOS */}
        <div className='inicio__cantidad-resultados'>
          {/* Total de Resultados: <span className='resultados-numero'>{numeroResultados}</span> */}
          Total de Resultados: <span className='resultados-numero'>648</span>
        </div>
  
        {/* CAJA DE LAS TARJETAS */}
        <section className='inicio__contenedor'>
  
          {
            pokemones.map((pokemon)=>{
              return(
                <Tarjeta numero={pokemon.name} key={pokemon.name}/>
              )
            })
          }
  
        </section>
  
        {/* SECCION DE PAGINACION */}
        <Nav numero={Number(pagina)}/>
  
      </div>
    )
  } else{

    return <Pagina404/>
  }

}
