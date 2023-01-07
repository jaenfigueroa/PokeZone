import React, {useRef, useEffect, useState} from 'react'
import { traerListaNombres } from '../../helpers/traer_lista_nombres'
import { useNavigate } from 'react-router-dom'
import { NoExiste } from '../NoExiste/NoExiste'
import './Inicio.css'

/* HOOK: USE TRANSLATION */
import { useTranslation } from 'react-i18next'

//////////////////////////////////////////////////
export const Inicio = ({audio, setAudio}) => {

  const {t} = useTranslation()


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


  /* AUDIO */
  useEffect(()=>{
    return(()=>{
      document.getElementById('audio_cambiar').play()
    })
  }, [])


  //////////////////////////////////////////////////
  const buscarPokemon = (evento)=>{
    evento.preventDefault()

    let target = evento.target
    let busqueda = target.busqueda.value

    //comprobar que la busqueda este en la lista de recomendaciones
    if (recomendaciones.includes(busqueda)) {
      
      let index = recomendaciones.findIndex(x => x === busqueda)
      let indice = index + 1

      // console.log(indice)

      navigate(`/pokemon/${indice}`)
    } else{
      setAviso(true)
      setLaBusqueda(busqueda)
    }
  }

  useEffect(()=>{
    document.getElementById('miVideo-inicio').play()
  },[])


  //ACTIVAR - DEACTIVAR AUDIO ///////////////////////////////////////////////
  function sonidoCambiar(valor){
    //cambiar el estado
    setAudio(valor)
    //local storage
    localStorage.setItem('audio', valor)
  }
  
  //////////////////////////////////////////////////
  return (
    <div className='caja-busqueda'>
      
      <video  className='video-inicio' loop muted={!audio} id='miVideo-inicio'>
        <source src="https://storage.googleapis.com/pgoblog/seasons-mythical-wishes/Hero%20Trailer/PGO_S9_Launch_16x9_WebHeader_v1.mp4" type="video/mp4"/>
      </video>

      {/* <p className='busqueda__frase'>PokeSearch</p> */}
      <p className='busqueda__frase'>
        {t('buscar')}
        <span className='caja-de-volumen'>
          {
            audio?(
              <i className="fa-solid fa-volume-high" onClick={()=>sonidoCambiar(false)}></i>
            ) :(<i className="fa-solid fa-volume-xmark" onClick={()=>sonidoCambiar(true)}></i>)
          }
        </span>
      </p>

      <form className='busqueda__formulario' ref={formulario} onSubmit={buscarPokemon}>
        <input type='text' className='busqueda__input' list='animales' name='busqueda' placeholder={t('nombre-de-pokemon')}></input>
        <button type="submit"  className='busqueda__boton'>
        <i className="fa-solid fa-magnifying-glass"></i>
        </button>

        {/* LISTA DE RECOMENDACIONES */}
        <datalist id='animales' className='busqueda__opcion'>
          {
            recomendaciones.map((elemento, indice)=>{

              return <option readOnly value={elemento} key={indice} className='busqueda__opcion'></option>
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
