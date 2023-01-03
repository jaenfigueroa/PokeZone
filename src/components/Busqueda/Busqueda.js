import React, {useRef, useEffect, useState} from 'react'
import './Busqueda.css'
import { traerListaNombres } from '../../helpers/traer_lista_nombres'
import { useNavigate } from 'react-router-dom'
import { NoExiste } from '../NoExiste/NoExiste'

//////////////////////////////////////////////////
export const Busqueda = () => {

  const [recomendaciones, setRecomendaciones] = useState([])
  const [aviso, setAviso] = useState(false)
  const [laBusqueda, setLaBusqueda] = useState('')

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

    //comprobar que la busqueda este en la lista de recomendaciones
    if (recomendaciones.includes(busqueda)) {
      
      navigate(`/pokemon/${busqueda}`)
    } else{
      setAviso(true)
      setLaBusqueda(busqueda)
    }
  }

  //////////////////////////////////////////////////
  return (
    <div className='caja-busqueda'>

      <img
        src='https://www.pkparaiso.com/noticias/16485/3298160972.png'
        alt='imagen del buscador'
        className='busqueda__imagen'/>

      <form className='busqueda__formulario' ref={formulario} onSubmit={buscarPokemon}>
        <input type='text' className='busqueda__input' list='animales' name='busqueda' placeholder='Nombre del pokemon'></input>
        <input type="submit"  className='busqueda__boton' value='Buscar'/>

        {/* LISTA DE RECOMENDACIONES */}
        <datalist id='animales' className='busqueda__opcion'>
          {
            recomendaciones.map((elemento, indice)=>{

              return <option value={elemento} key={indice} className='busqueda__opcion'></option>
            })
          }
        </datalist>

      {/* AVISO */}
      {
        aviso && <NoExiste laBusqueda={laBusqueda}/>
      }
      </form>
      

    </div>
  )
}
