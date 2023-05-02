import React, {useState } from 'react'
import {Routes, Route, HashRouter, Navigate} from 'react-router-dom'
import { Inicio } from '../components/Busqueda/Inicio'
import { Favoritos } from '../components/Favoritos/Favoritos'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import { Pagina404 } from '../components/Pagina404/Pagina404'
import { SeccionPokemon } from '../components/SeccionPokemon/SeccionPokemon'
import { Todos } from '../components/Todos/Todos'
import { actualizarIdioma } from '../helpers/actualizarIdioma'

/* i18n (solo si necesito cambuar configuracion de i18n)*/
import i18n from '../languages/i18n'

/* AUDIOS */
import audio_pikachu from '../sounds/pikapikachu.mp3'
import audio_cambiar from '../sounds/cambiar.mp3'
import audio_agregar from '../sounds/agregar.wav'
import audio_quitar from '../sounds/quitar2.wav'


//RECUPERAR EL IDIOMA GUARDADO DEL USUARIO Y ASIGNAR
const actualizarIdiomaUsuario = ()=>{
  let idiomaGuardado = actualizarIdioma()
  i18n.changeLanguage(idiomaGuardado)

  if (typeof idiomaGuardado === 'string') {
    return idiomaGuardado
  } else{
    return 'en'
  }
}



///////////////////////////////////////////////
export const MisRutas = () => {

  let [idioma, setIdioma] = useState(actualizarIdiomaUsuario)

  /* audio del video del buscador */
  let [audio, setAudio] = useState(false)


  ///////////////////////////////////////////////
  return (
    <HashRouter>

      {/* HEADER Y NAVEGACION */}
      <Header/>

      {/* CUERPO */}
      <main className='main'>
        <Routes>
          <Route path='/' element={<Navigate to='/inicio'/>}/>
          <Route path='/inicio' element={<Inicio audio={audio} setAudio={setAudio}/>}/>

          <Route path='/todos' element={<Navigate to='/todos/1'/>}/>
          <Route path='/todos/:numeroPagina' element={<Todos idioma={idioma}/>}/>

          <Route path='/pokemon/' element={<Navigate to='/pokemon/aleatorio'/>}/>
          <Route path='/pokemon/:id' element={<SeccionPokemon idioma={idioma}/>}/>

          <Route path='/favoritos' element={<Favoritos idioma={idioma}/>}/>

          <Route path='*' element={<Pagina404/>}/>
        </Routes>
      </main>

      {/* FOOTER */}
      <Footer idioma={idioma} setIdioma ={setIdioma}/>


      {/* AUDIOS */}
      <div className='contenedor-de-audios'>
        <audio src={audio_pikachu} controls id='audio_pikachu'></audio>
        <audio src={audio_cambiar} controls id='audio_cambiar'></audio>
        <audio src={audio_agregar} controls id='audio_agregar'></audio>
        <audio src={audio_quitar} controls id='audio_quitar'></audio>
      </div>

    </HashRouter>
  )
}