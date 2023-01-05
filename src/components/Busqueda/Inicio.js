import React, {useRef, useEffect, useState} from 'react'
import { traerListaNombres } from '../../helpers/traer_lista_nombres'
import { useNavigate } from 'react-router-dom'
import { NoExiste } from '../NoExiste/NoExiste'
import './Inicio.css'





//////////////////////////////////////////////////
export const Inicio = () => {

  const [recomendaciones, setRecomendaciones] = useState([])
  const [aviso, setAviso] = useState(false)
  const [laBusqueda, setLaBusqueda] = useState('')
  const [sonido, setSonido] = useState(false)

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
  const video = document.getElementById('miVideo-inicio')

  function sonidoActivar(valor){
    setSonido(valor)
    if (valor) {
      video.muted = false;
    } else{
      video.muted = true;
    }
  }
  
  //////////////////////////////////////////////////
  return (
    <div className='caja-busqueda'>
      
      <video  className='video-inicio' loop muted id='miVideo-inicio'>
        <source src="https://storage.googleapis.com/pgoblog/seasons-mythical-wishes/Hero%20Trailer/PGO_S9_Launch_16x9_WebHeader_v1.mp4" type="video/mp4"/>
      </video>

      {/* <p className='busqueda__frase'>PokeSearch</p> */}
      <p className='busqueda__frase'>
        Buscador
        <span className='caja-de-volumen'>
          {
            sonido?(
              <i className="fa-solid fa-volume-high" onClick={()=>sonidoActivar(false)}></i>
            ) :(<i className="fa-solid fa-volume-xmark" onClick={()=>sonidoActivar(true)}></i>)
          }
        </span>
      </p>

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
