import React, { useEffect, useState } from 'react'
import './Tarjeta.css'
import { useNavigate } from 'react-router-dom'

import {BarLoader} from "react-spinners";
import { guardarFavorito } from '../../helpers/guardarFavorito';
import { quitarFavorito } from '../../helpers/quitarFavorito';
import { comprobarSiEsFavorito } from '../../helpers/comprobarSiEsFavorito';
import { traerPokemonBasico } from '../../helpers/traer_pokemon_basico';

/////////////////////////////////////////
export const Tarjeta = ({numero, drag}) => {

  const [pokemon, setPokemon] = useState({})
  const [cargando, setCargando] = useState(true)
  const [favorito, setFavorito] = useState(false)

  let navigate = useNavigate()

  //////////////////////////////////////
  useEffect(()=>{

    const solicitarPokemon = async() => {
      let pokemon = await traerPokemonBasico(numero)
      // console.log(pokemon);
      
      setPokemon(pokemon)

      setFavorito(comprobarSiEsFavorito(pokemon.nombre))
    }

    solicitarPokemon()

  }, [numero])




  //////////////////////////////////////
  return (
    <article
      // className='contenedor-tarjeta'
      className={`contenedor-tarjeta ${drag? 'tarjeta-borde-negro':''}`}
      onClick={()=>navigate(`/pokemon/${numero}`)}>
      {/* CAJA 1 */}
      <div className='tarjeta__caja1'>
        <span className='tarjeta__numero'> #{pokemon.id}</span>
        <button className='tarjeta__favorito'>

          {
            favorito? (
              <i className={'fa-star fa-solid'}
              onClick={(evento)=>{
                //para evitar que se ejecute el onclick del padre
                evento.stopPropagation()
                quitarFavorito(pokemon.nombre)
                setFavorito(false)
              }}></i>
            ) :
            (
              <i className={'fa-star fa-regular'}
                onClick={(evento)=>{
                  //para evitar que se ejecute el onclick del padre
                  evento.stopPropagation()
                  guardarFavorito(pokemon.nombre)
                  setFavorito(true)
                }}></i>
            )
          }

        </button>
      </div>

      {/* IMAGEN */}
      <div className='tarjeta__imagen' >
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


      {/* ICONO DRAG */}
      {
        drag && (
          <i
            className="fa-solid fa-grip-vertical icono-drag"
            title='mover de posicion'></i>
        )
      }

    </article>
  )
}
