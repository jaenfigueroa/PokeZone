import React, { useEffect, useState } from 'react'
import './Pokemon.css'
import { traerPokemon } from '../../helpers/traer_pokemon'

import { guardarFavorito } from '../../helpers/guardarFavorito';
import { quitarFavorito } from '../../helpers/quitarFavorito';
import { comprobarSiEsFavorito } from '../../helpers/comprobarSiEsFavorito';
import { useNavigate } from 'react-router-dom';

import { Nav } from '../Nav/Nav'
import { Tarjeta } from './Tarjeta/Tarjeta';

//////////////////////////////////////////////////
export const Pokemon = ({idPokemon, cargando, setCargando, pokemon, setPokemon}) => {

  /* HOOK: USE STATE */
  const [favorito, setFavorito] = useState(false)
  
  const navigate = useNavigate()
  /* HOOK USE EFFECT */
  useEffect(()=>{

    //ocultar la seccion cuando se cambia de valor
    setCargando(true)

    const hacerPeticion = async (nombre)=>{
      const pokemon = await traerPokemon(nombre)
      // console.log(pokemon);
      setPokemon(pokemon)
    }

    /* /////////////////////////////// */

    if (idPokemon === 'aleatorio') {

      const traerNombres = async ()=>{
        //escoger un numero
        let numero = Math.floor(Math.random() * (900 - 1) + 1)

        //moverme a esa pagina
        navigate(`/pokemon/${numero}`)
      }

      traerNombres()


    } else{

      // console.log(pokemon)

      setPokemon(idPokemon)
      hacerPeticion(idPokemon)
    }

  }, [idPokemon, setPokemon, navigate, setCargando])


  useEffect(()=>{

    // console.log(pokemon)
    pokemon.nombre && setFavorito(comprobarSiEsFavorito(pokemon.nombre))

  }, [pokemon])



  if (pokemon !== null && Object.keys(pokemon).length !== 0 && pokemon !== undefined) {
    
    /* //////////////////////////////////////////////// */
    return(
      <>
        <div className='caja-pokemon' 
          onLoad={()=> setCargando(false)}
          style={{ display: cargando ? 'none' : 'flex' }}>



          <div className='pokemon__caja1'>
            <p>#{pokemon.id}</p>
  
            {/* /////////////////////////// */}
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
            {/* /////////////////////////// */}
  
          </div>
    
          <div className='caja-descripcion'>
            <p className='descripcion__nombre'>{pokemon.nombre}</p>
            <p className='descripcion__tipos'>{pokemon.tipos}</p>
            <p className='descripcion__biografia'>{pokemon.descripcion}</p>
          </div>
          <img
              className='pokemon__img'
              src={pokemon.foto}
              alt='imagen de un pokemon'></img>
    
          <div className='pokemon__caja2'>
            <hr/>

            {/* SECCION: DIMENSIONES */}
            <p className='titulo_seccion'>Dimensiones</p>

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
    
    

            <hr/>



            {/* SECCION: ESTADISTICAS */}
            <div className='caja2-2'>

              <p className='titulo_seccion'>Estadisticas</p>
              
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




          <hr/>




          {/* SECCION: VARIACIONES DE APARIENCIA */}
          <p className='titulo_seccion'>Variaciones de apariencia</p>

          <div className='contenedor-variaciones'>

            {pokemon.variaciones && pokemon.variaciones.length > 0 ? (
              pokemon.variaciones.map((elemento) => {
                return <Tarjeta urlImagen={elemento.imagen} key={Math.random()} nombre={elemento.nombre}/>
              })

            ) : null}

          </div>




          <hr/>



          
          {/* SECCION: PROCESO DE EVOLUCION */}
          <p className='titulo_seccion'>Proceso de evolucion</p>

          <div className='contenedor-evoluciones'>

          {pokemon.evoluciones && pokemon.evoluciones.length > 0 ? (
              pokemon.evoluciones.map((elemento) => {
                return (
                  <span key={elemento.nombre} className='caja-bbbb'>
                    <i className="fa-solid fa-arrow-right icono-flecha-evolucion" ></i>
                    <Tarjeta
                      nombre={elemento.nombre}
                      urlImagen={elemento.imagen}/>
                  </span>
                )
              })
            ) : null}


          </div>
          <hr/>


          <Nav
          url='/pokemon/'
          numero={pokemon.id}
          ultimaPagina={891}/>

        </div>

      </>
    ) 
  }

}
