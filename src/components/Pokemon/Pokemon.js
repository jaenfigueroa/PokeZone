import React, { useEffect, useState } from 'react'
import './Pokemon.css'
import { traerPokemon } from '../../helpers/traer_pokemon'
import { useNavigate, useParams } from 'react-router-dom'
import {BarLoader} from "react-spinners";

import { guardarFavorito } from '../../helpers/guardarFavorito';
import { quitarFavorito } from '../../helpers/quitarFavorito';
import { comprobarSiEsFavorito } from '../../helpers/comprobarSiEsFavorito';
import { Nav } from '../Nav/Nav';


export const Pokemon = () => {

  /* HOOK: USE STATE */
  const [pokemon, setPokemon] = useState({})
  const [cargando, setCargando] = useState(true)

  const [favorito, setFavorito] = useState(false)

  /* HOOK: USE PARAMS */
  const {nombre} = useParams()

  const navigate = useNavigate()

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

      //par moverme a esa urrl, de esa manera activar el nav de paginacion
      navigate('/pokemon/' + numero)

    } else{
      setPokemon(nombre)
      hacerPeticion(nombre)

    }


  }, [nombre, navigate])


  useEffect(()=>{

    setFavorito(comprobarSiEsFavorito(pokemon.nombre))

  }, [pokemon])



    
    return(
      <>
        {
          cargando && (
            <div className='caja-cargando-pokemon'>
              <BarLoader color='#fff' className='tarjeta__img'/>
            </div>
          )
        }
  
        <div
          className='caja-pokemon' 
          onLoad={()=> setCargando(false)}
          style={{ display: cargando ? 'none' : 'flex' }}>
  
          <div className='pokemon__caja1'>
            <p>#{pokemon.id}</p>
  
            {
              favorito? (
                <i className={'fa-star fa-solid'}
                onClick={()=>{
                  quitarFavorito(pokemon.nombre)
                  setFavorito(false)
                }}></i>
              ) :
              (
                <i className={'fa-star fa-regular'}
                  onClick={()=> {
                    guardarFavorito(pokemon.nombre)
                    setFavorito(true)
                  }}></i>
              )
            }
  
          </div>
    
          <div className='caja-descripcion'>
            <p className='descripcion__nombre'>{pokemon.nombre}</p>
            <p className='descripcion__biografia'>{pokemon.descripcion}</p>
          </div>


          {/* IMAGEN */}
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
        <Nav numero={pokemon.id} url='/pokemon/' ultimaPagina={648}/>
        </div>

      </>
    ) 

}
