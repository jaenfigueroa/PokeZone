import './SeccionPokemon.css'
import { useState} from 'react'
import { Pokemon } from '../../pages/Pokemon/Pokemon'
import { BarLoader } from 'react-spinners'
import { useParams } from 'react-router-dom'
import { Pagina404 } from '../../pages/Pagina404/Pagina404'
import { useLanguage } from '../../hooks/useLanguage'


export const SeccionPokemon = () => {

  const {idioma} = useLanguage()

  /* HOOK USE STATE */
  const [cargando, setCargando] = useState(true)
  const [pokemon, setPokemon] = useState({})

  /* HOOK: USE PARAMS */
  const {id} = useParams()

  /* AUDIO */
  // useEffect(()=>{
  //   return(()=>{
  //     document.getElementById('audio_cambiar').play()
  //   })
  // }, [])

  /* ///////////////////////////////////////////////////////////////// */
  if ((id >= 1 && id <= 892) || id === 'aleatorio') {

    return(
      <div className='contenedor-global-pokemon'>

        {
          cargando && (
            <div className='caja-cargando-pokemon'>
              <BarLoader color='#fff' className='tarjeta__img'/>
            </div>
          )
        }

        <Pokemon
          idPokemon={id}
          cargando={cargando}
          setCargando={setCargando}
          pokemon={pokemon}
          setPokemon={setPokemon}
          idioma={idioma}/>
      </div>
    )
  } else{
    return <Pagina404/>
  }
}
