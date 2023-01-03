import React, { useEffect, useState } from 'react'
import './Pokemon.css'
import { traerPokemon } from '../../helpers/traer_pokemon'

import { guardarFavorito } from '../../helpers/guardarFavorito';
import { quitarFavorito } from '../../helpers/quitarFavorito';
import { comprobarSiEsFavorito } from '../../helpers/comprobarSiEsFavorito';
import { useNavigate } from 'react-router-dom';

import { Nav } from '../Nav/Nav'


//////////////////////////////////////////////////
export const Pokemon = ({cargando, setCargando, nombre, pokemon, setPokemon}) => {

  /* HOOK: USE STATE */
  const [favorito, setFavorito] = useState(false)
  let [pokemonActual, setPokemonActual] = useState({})
  
  const navigate = useNavigate()
  /* HOOK USE EFFECT */
  useEffect(()=>{

    const hacerPeticion = async (nombre)=>{
      const pokemon = await traerPokemon(nombre)
      // console.log(pokemon);
      setPokemon(pokemon)
      setPokemonActual(pokemon)
    }

    /* /////////////////////////////// */

    if (nombre === 'aleatorio') {

      const traerNombres = async ()=>{
        //escoger un numero
        let numero = Math.floor(Math.random() * (648 - 1) + 1)

        //moverme a esa pagina
        navigate(`/pokemon/${numero}`)
      }

      traerNombres()


    } else{
      setPokemon(nombre)
      hacerPeticion(nombre)
    }

  }, [nombre, setPokemon, navigate])


  useEffect(()=>{

    setFavorito(comprobarSiEsFavorito(pokemon.nombre))

  }, [pokemon])


  useEffect(()=>{



  },[])

    /* //////////////////////////////////////////////// */
    return(
      <>
        <div className='caja-pokemon' 
          onLoad={()=> setCargando(false)}
          style={{ display: cargando ? 'none' : 'flex' }}>



          <div className='pokemon__caja1'>
            <p>#{pokemonActual.id}</p>
  
            {/* /////////////////////////// */}
            {
              favorito? (
                <i className={'fa-star fa-solid'}
                onClick={()=>{
                  quitarFavorito(pokemonActual.nombre)
                  setFavorito(false)
                }}></i>
              ) :
              (
                <i className={'fa-star fa-regular'}
                  onClick={()=> {
                    guardarFavorito(pokemonActual.nombre)
                    setFavorito(true)
                  }}></i>
              )
            }
            {/* /////////////////////////// */}
  
          </div>
    
          <div className='caja-descripcion'>
            <p className='descripcion__nombre'>{pokemonActual.nombre}</p>
            <p className='descripcion__biografia'>{pokemonActual.descripcion}</p>
          </div>
          <img
              className='pokemon__img'
              src={pokemonActual.foto}
              alt='imagen de un pokemon'></img>
    
          <div className='pokemon__caja2'>
            <section className='caja2-1'>
  
              {/* PESO */}
              <article className='pokemon-peso'>
                <span className='poke-titulo'>Peso</span>
                <p>{pokemonActual.peso}<span>kg</span></p>
                
              </article>
              {/* ALTURA */}
              <article className='pokemon-altura'>
                <span className='poke-titulo'>Altura</span>
                <p>{pokemonActual.altura}<span>m</span></p>
              </article>
              
            </section>
    
    
            <div className='caja2-2'>
              <p>Estadisticas</p>
              
              <section>
                {/* HP */}
                <article>
                  <span>HP</span>
                  <span>{pokemonActual.hp}</span>
                </article>
                {/* ATAQUE */}
                <article>
                  <span>Ataque</span>
                  <span>{pokemonActual.ataque}</span>
                </article>
                {/* DEFENSA */}
                <article>
                  <span>Defensa</span>
                  <span>{pokemonActual.defensa}</span>
                </article>
                {/* ATAQUE ESPECIAL */}
                <article>
                  <span>Ataque especial</span>
                  <span>{pokemonActual.ataqueEspecial}</span>
                </article>
                {/* DEFENSA ESPECIAL */}
                <article>
                  <span>Defensa especial</span>
                  <span>{pokemonActual.defensaEspecial}</span>
                </article>
                {/* VELOCIDAD */}
                <article>
                  <span>Velocidad</span>
                  <span>{pokemonActual.velocidad}</span>
                </article>
              </section>
            </div>
          </div>
        </div>

        <Nav
        url='/pokemon/'
        numero={pokemonActual.id}
        ultimaPagina={648}/>
      </>
    ) 

}
