import React, { useEffect, useState } from 'react'
import './Tarjeta.css'
import { traerPokemon } from '../../helpers/traer_pokemon'

/////////////////////////////////////////
export const Tarjeta = ({numero}) => {

  const [pokemon, setPokemon] = useState({})

  // console.log(numero);
  //////////////////////////////////////
  useEffect(()=>{

    const solicitarPokemon = async() => {
      let pokemon = await traerPokemon(numero)
      // console.log(pokemon);
      
      setPokemon(pokemon)
    }

    solicitarPokemon()

  }, [])

  //////////////////////////////////////
  return (
    <article className='contenedor-tarjeta'>
      <div className='tarjeta__caja1'>
        <span className='tarjeta__numero'> #{pokemon.id}</span>
        <button className='tarjeta__favorito'>
          <i className={`fa-heart ${pokemon.favorito? 'fa-solid' : 'fa-regular'}`}></i>
        </button>
      </div>

      <div className='tarjeta__imagen'>
        <img className='tarjeta__img' src={pokemon.foto}></img>
      </div>
      <div className='tarjeta__caja2'>
        <span className='tarjeta__nombre'>{pokemon.nombre}</span>
        <span className='tarjeta__tipos'>{pokemon.tipos}</span>
      </div>
    </article>
  )
}
