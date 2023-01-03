import React, { useEffect, useState } from 'react'
import './Pokemon.css'
import { traerPokemon } from '../../helpers/traer_pokemon'
import { useParams } from 'react-router-dom'

export const Pokemon = () => {

  /* HOOK: USE STATE */
  const [pokemon, setPokemon] = useState({})

  /* HOOK: USE PARAMS */
  const {nombre} = useParams()

  /* HOOK USE EFFECT */
  useEffect(()=>{
    
    const hacerPeticion = async (nombre)=>{
      const pokemon = await traerPokemon(nombre)
      // console.log(pokemon);
  
      setPokemon(pokemon)
    }

    if (nombre === 'aleatorio') {
      let numero = Math.floor(Math.random() * (648 - 1) + 1)
      setPokemon(numero)
      hacerPeticion(numero)

    } else{
      setPokemon(nombre)
      hacerPeticion(nombre)

    }

  }, [nombre])



  return(
      <div className='caja-pokemon' >
        <div className='pokemon__caja1'>
          <p>#{pokemon.id}</p>
          <i className='fa-star fa-solid'/>
        </div>
  
        <div className='caja-descripcion'>
          <p className='descripcion__nombre'>{pokemon.nombre}</p>
          <p className='descripcion__biografia'>{pokemon.descripcion}</p>
        </div>
        <img
            className='pokemon__img'
            src={pokemon.foto}
            alt='imagen de un pokemon'></img>
  
        <div className='pokemon__caja2'>
          <section className='caja2-1'>

            {/* PESO */}
            <article className='pokemon-peso'>
              <span className='poke-titulo'>Peso</span>
              <p>{pokemon.peso}<span>kg</span></p>
              
            </article>
            {/* ALTURA */}
            <article className='pokemon-altura'>
              <span className='poke-titulo'>Altura</span>
              <p>{pokemon.altura}<span>m</span></p>
            </article>
            
          </section>
  
  
          <div className='caja2-2'>
            <p>Estadisticas</p>
            
            <section>
              {/* HP */}
              <article>
                <span>HP</span>
                <span>{pokemon.hp}</span>
              </article>
              {/* ATAQUE */}
              <article>
                <span>Ataque</span>
                <span>{pokemon.ataque}</span>
              </article>
              {/* DEFENSA */}
              <article>
                <span>Defensa</span>
                <span>{pokemon.defensa}</span>
              </article>
              {/* ATAQUE ESPECIAL */}
              <article>
                <span>Ataque especial</span>
                <span>{pokemon.ataqueEspecial}</span>
              </article>
              {/* DEFENSA ESPECIAL */}
              <article>
                <span>Defensa especial</span>
                <span>{pokemon.defensaEspecial}</span>
              </article>
              {/* VELOCIDAD */}
              <article>
                <span>Velocidad</span>
                <span>{pokemon.velocidad}</span>
              </article>
            </section>
          </div>
        </div>
      </div>
  )
}
