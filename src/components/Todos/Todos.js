import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'
import { traerListaNombres } from '../../helpers/traer_lista_nombres'
import { Nav } from '../Nav/Nav'
import { Pagina404 } from '../Pagina404/Pagina404'
import { Tarjeta } from '../Tarjeta/Tarjeta'
import './Todos.css'


/* i18n - IMPORTAR USE TRANSLATION */
import { useTranslation } from 'react-i18next'


////////////////////////////////////////
export const Todos = () => {
  
  /* i18n */
  const {t} = useTranslation()
  
  //HOOKS: USE PARAMS
  const {numeroPagina} = useParams()

  //HOOKS: USE STATE
  let [pagina, setPagina] = useState(numeroPagina)
  // const [numeroResultados, setNumeroResultados] = useState(0)
  const [pokemones, setPokemones] = useState([])

  let [lista, setLista] = useState([])


    /////////////////////////////////

    useEffect(()=>{
  
      const traerNombres = async()=>{
  
        let x = await traerListaNombres()

        // console.log(x)
        setLista(x)
      }
  
      traerNombres()
      
    }, [])



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

  if (pagina >= 1 && pagina <= 99 ) {
    
    return (
      <div>
        {/* AVISO DE CANTIDAD DE RESULTADOS */}
        <div className='inicio__cantidad-resultados'>
          {/* Total de Resultados: <span className='resultados-numero'>{numeroResultados}</span> */}
          {t('Total de Resultados')}: <span className='resultados-numero'>891</span>
        </div>
  
        {/* CAJA DE LAS TARJETAS */}
        <section className='inicio__contenedor'>
  
          {
            pokemones.map((pokemon)=>{

              //usando el nombre, obtenemos el indice, y con ello el id del pokemon
              let nombre = pokemon.name
              let index = lista.findIndex(x => x === nombre)

              // console.log(index + 1);

              return(
                <Tarjeta
                  numero={index + 1}
                  key={pokemon.name}/>
              )
            })
          }
  
        </section>
  
        {/* SECCION DE PAGINACION */}
        <Nav numero={Number(pagina)} url='/todos/' ultimaPagina={99}/>
  
      </div>
    )
  } else{

    return <Pagina404/>
  }

}
