import React, {useEffect, useState} from 'react'
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
  const {id} = useParams()


  // console.log(pokemon);

  useEffect(()=>{

  }, [])
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
        id={id}
        cargando={cargando}
        setCargando={setCargando}
        pokemon={pokemon}
        setPokemon={setPokemon}/>

    </div>
  )
}
