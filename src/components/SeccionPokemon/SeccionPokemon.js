import React, {useState} from 'react'
import { Nav } from '../Nav/Nav'
import { Pokemon } from '../Pokemon/Pokemon'
import './SeccionPokemon.css'
import {BarLoader} from "react-spinners";
import { useParams } from 'react-router-dom'


export const SeccionPokemon = () => {

  /* HOOK USE STATE */
  const [cargando, setCargando] = useState(true)
  const [pokemon, setPokemon] = useState({})

  /* HOOK: USE PARAMS */
  const {nombre} = useParams()


  /* ///////////////////////////////////////////////////////////////// */
  return (
    <div className='contenedor-global-pokemon'>

        {
          cargando && (
            <div className='caja-cargando-pokemon'>
              <BarLoader color='#fff' className='tarjeta__img'/>
            </div>
          )
        }


      <Pokemon
        nombre={nombre}
        cargando={cargando}
        setCargando={setCargando}
        pokemon={pokemon}
        setPokemon={setPokemon}/>

      <Nav
        url='/pokemon/'
        numero={pokemon.id}
        ultimaPagina={648}/>

    </div>
  )
}
