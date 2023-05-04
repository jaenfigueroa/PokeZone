import './Home.scss'
import { useState, useEffect } from 'react'
import { Search } from './Search/Search'
import { useTranslation } from 'react-i18next'

//////////////////////////////////////////////////
export const Home = () => {

  //ESTADO PARA CONTROLAR SI EL VIDEO ESTA MUTEADO
  const [isMutedVideo, setIsMutedVideo] = useState<boolean>(true)

  //FUNCION PARA ACTIVAR/DESACTIVAR AUDIO DEL VIDEO
  const sonidoCambiar = (valor:boolean) => {
    setIsMutedVideo(valor)
  }

  // PARA EMPEZAR A REPRODUCIR EL VIDEO APENAS CARGA LA PAGINA DE HOME
  useEffect(()=>{
    const video = document.getElementById('miVideo-inicio') as HTMLVideoElement
    video.play()
  },[])

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  const {t} = useTranslation()

  //////////////////////////////////////////////////
  return (
    <section className='caja-busqueda'>

      {/* VIDEO DE FONDO */}
      <video  className='video-inicio' loop muted={Boolean(isMutedVideo)} id='miVideo-inicio'>
        <source src='https://storage.googleapis.com/pgoblog/seasons-mythical-wishes/Hero%20Trailer/PGO_S9_Launch_16x9_WebHeader_v1.mp4' type='video/mp4'/>
      </video>

      {/* LETRA BUSCAR - ICONO SILENCIAR */}
      <section className='busqueda__frase'>

        {t('buscar')}

        <span className='caja-de-volumen'>
          {
            !isMutedVideo
              ? <i className='fa-solid fa-volume-high' onClick={()=>sonidoCambiar(true)}></i>
              : <i className='fa-solid fa-volume-xmark' onClick={()=>sonidoCambiar(false)}></i>
          }
        </span>
      </section>

      {/* BUSCADOR Y CONTENEDOR DE COINCIDENCIAS */}
      <Search/>

    </section>
  )
}
