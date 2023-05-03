import './Home.scss'
import {useRef, useEffect, useState} from 'react'
import { traerListaNombres } from '../../helpers/traer_lista_nombres'
import { useNavigate } from 'react-router-dom'
import { NoExiste } from '../../components/NoExiste/NoExiste'
import { useTranslation } from 'react-i18next' /* HOOK: USE TRANSLATION */

//////////////////////////////////////////////////
export const Home = () => {
  const [audioVideo, setAudioVideo] = useState(false) /* audio del video del buscador */
  const [recomendacionesCompleta, setRecomendacionesCompleta] = useState([])
  const [aviso, setAviso] = useState(false)
  const [laBusqueda, setLaBusqueda] = useState('')
  const [recomendaciones, setRecomendaciones] = useState([])

  const formulario = useRef()

  const navigate = useNavigate()
  const {t} = useTranslation()

  useEffect(() => {
    const traerLista = async ()=>{ //traer lista de pokemones
      const lista = await traerListaNombres()
      // console.log(lista)

      setRecomendacionesCompleta(lista)
    }

    traerLista()
  }, [])

  //////////////////////////////////////////////////
  const buscarPokemon = (evento)=>{
    evento.preventDefault()

    const target = evento.target
    const busqueda = target.busqueda.value

    //comprobar que la busqueda este en la lista de recomendaciones
    if (recomendacionesCompleta.includes(busqueda)) {

      const index = recomendacionesCompleta.findIndex(x => x === busqueda)
      const indice = index + 1

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


  //ACTIVAR - DESACTIVAR AUDIO VIDEO ///////////////////////////////////////////////
  function sonidoCambiar(valor){
    //cambiar el estado
    setAudioVideo(valor)
    //local storage
    localStorage.setItem('audio', valor)
  }

  ////////////////////////////////////////////////

  const [cajaVisible, setCajaVisible] = useState(true)

  const filtrarRecomendaciones = (evento)=>{

    //ocultar el aviso
    setAviso(false)

    //buscar las coincidencias con la busqueda
    const busqueda = (evento.target.value).toLowerCase()

    const nuevaListaFiltrada = []

    recomendacionesCompleta.forEach(nombre => {

      //si el elemento de la lista incluye la busqueda, se manda a la lista de recomendaciones
      nombre.includes(busqueda) && nuevaListaFiltrada.push(nombre)
    })

    setRecomendaciones(nuevaListaFiltrada)

    //mostrar o no , el cuadro de recomendaciones, si no tiene ninguna coincidencia
    setCajaVisible(busqueda.length) // es hay 1, se mostrara, si es 0, se ocultara
  }

  //////////////////////////////////////////////////
  return (
    <section className='caja-busqueda'>
      <video  className='video-inicio' loop muted={!audioVideo} id='miVideo-inicio'>
        <source src='https://storage.googleapis.com/pgoblog/seasons-mythical-wishes/Hero%20Trailer/PGO_S9_Launch_16x9_WebHeader_v1.mp4' type='video/mp4'/>
      </video>

      {/* <p className='busqueda__frase'>PokeSearch</p> */}
      <p className='busqueda__frase'>
        {t('buscar')}
        <span className='caja-de-volumen'>
          {
            audioVideo?(
              <i className='fa-solid fa-volume-high' onClick={()=>sonidoCambiar(false)}></i>
            ) :(<i className='fa-solid fa-volume-xmark' onClick={()=>sonidoCambiar(true)}></i>)
          }
        </span>
      </p>

      <form className='busqueda__formulario' ref={formulario} onSubmit={buscarPokemon}>
        <input
          type='text'
          className='busqueda__input'
          list='animales'
          name='busqueda'
          placeholder={t('nombre-de-pokemon') || ''}
          id='input-busqueda'
          autoComplete='off'
          onChange={filtrarRecomendaciones}></input>
        <button type='submit'  className='busqueda__boton'>
          <i className='fa-solid fa-magnifying-glass'></i>
        </button>

        {/* CAJA DE RECOMENDACIONES */}
        {
          cajaVisible ? (
            <ul className='caja_recomendaciones' id='caja-recomendaciones'>
              {
                recomendaciones.map((elemento, indice)=>{

                  return <li
                    key={indice}
                    onClick={
                      ()=>{
                        document.getElementById('input-busqueda').value = elemento
                        setCajaVisible(false)
                      }
                    }>{elemento}</li>
                })
              }
            </ul>
          ) : ''
        }

        { aviso && <NoExiste laBusqueda={laBusqueda}/> } {/* AVISO */}
      </form>
    </section>
  )
}
