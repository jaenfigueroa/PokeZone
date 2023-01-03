import React, { useEffect, useState } from 'react'
import './Tarjeta.css'
import { traerPokemon } from '../../helpers/traer_pokemon'
import { useNavigate } from 'react-router-dom'

import {BarLoader} from "react-spinners";

/////////////////////////////////////////
export const Tarjeta = ({numero}) => {

  const [pokemon, setPokemon] = useState({})

  const [cargando, setCargando] = useState(true)


  let navigate = useNavigate()

  //////////////////////////////////////
  useEffect(()=>{

    const solicitarPokemon = async() => {
      let pokemon = await traerPokemon(numero)
      // console.log(pokemon);
      
      setPokemon(pokemon)
    }

    solicitarPokemon()

  }, [numero])

  //////////////////////////////////////
  return (
    <article className='contenedor-tarjeta' onClick={()=>navigate(`/pokemon/${numero}`)} >
      {/* CAJA 1 */}
      <div className='tarjeta__caja1'>
        <span className='tarjeta__numero'> #{pokemon.id}</span>
        <button className='tarjeta__favorito'>
          <i className={`fa-star ${pokemon.favorito? 'fa-solid' : 'fa-regular'}`}></i>
        </button>
      </div>

      {/* IMAGEN */}
      <div className='tarjeta__imagen'>
        {
          cargando && <BarLoader color='#fff' className='tarjeta__img'/>
        }
        <img
          className='tarjeta__img'
          src={pokemon.foto}
          alt='imagen de un pokemon'
          onLoad={()=> setCargando(false)}
          style={{ display: cargando ? 'none' : 'block' }}></img>
      </div>

      {/* CAJA 2 */}
      <div className='tarjeta__caja2'>
        <span className='tarjeta__nombre'>{pokemon.nombre}</span>
        <span className='tarjeta__tipos'>{pokemon.tipos}</span>
      </div>
    </article>
  )
}
