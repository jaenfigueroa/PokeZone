import React, {useRef, useEffect, useState} from 'react'
import './Busqueda.css'
import { traerListaNombres } from '../../helpers/traer_lista_nombres'
import { useNavigate } from 'react-router-dom'

//////////////////////////////////////////////////
export const Busqueda = () => {

  const [recomendaciones, setRecomendaciones] = useState([])
  const formulario = useRef()

  const navigate = useNavigate();

  useEffect(() => {
  
    //traer lista de pokemones
    const traerLista = async ()=>{
      let lista = await traerListaNombres()

      setRecomendaciones(lista)
    }

    traerLista()

  }, [])
  
  //////////////////////////////////////////////////
  const buscarPokemon = (evento)=>{
    evento.preventDefault()

    let target = evento.target
    let busqueda = target.busqueda.value

    navigate(`/pokemon/${busqueda}`)
  }

  //////////////////////////////////////////////////
  return (
    <div className='caja-busqueda'>

      <img
        src='https://www.pkparaiso.com/noticias/16485/3298160972.png'
        alt='imagen del buscador'
        className='busqueda__imagen'/>

      <form className='busqueda__formulario' ref={formulario} onSubmit={buscarPokemon}>
        <input type='text' className='busqueda__input' list='animales' name='busqueda'></input>
        <input type="submit"  className='busqueda__boton' value='Buscar'/>

        {/* LISTA DE RECOMENDACIONES */}
        <datalist id='animales' className='busqueda__opcion'>
          {
            recomendaciones.map((elemento, indice)=>{

              return <option value={elemento} key={indice} className='busqueda__opcion'></option>
            })
          }
        </datalist>

      </form>

    </div>
  )
}
