import React from 'react'
import {Routes, Route, HashRouter, Navigate} from 'react-router-dom'
import { Busqueda } from '../components/Busqueda/Busqueda'
import { Favoritos } from '../components/Favoritos/Favoritos'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import { Inicio } from '../components/Inicio/Inicio'
import { Pagina404 } from '../components/Pagina404/Pagina404'
import { SeccionPokemon } from '../components/SeccionPokemon/SeccionPokemon'

export const MisRutas = () => {
  return (
    <HashRouter>

      {/* HEADER Y NAVEGACION */}
      <Header/>

      {/* CUERPO */}
      <main className='main'>
        <Routes>
          <Route path='/' element={<Navigate to='/inicio'/>}/>
          <Route path='/inicio' element={<Navigate to='/inicio/1'/>}/>
          <Route path='/inicio/:numeroPagina' element={<Inicio/>}/>

          <Route path='/busqueda' element={<Busqueda/>}/>



          <Route path='/pokemon/' element={<Navigate to='/pokemon/aleatorio'/>}/>
          <Route path='/pokemon/:nombre' element={<SeccionPokemon/>}/>
          <Route path='/pokemon/:id' element={<SeccionPokemon/>}/>




          <Route path='/favoritos' element={<Favoritos/>}/>

          <Route path='*' element={<Pagina404/>}/>
        </Routes>
      </main>

      {/* FOOTER */}
      <Footer/>

    </HashRouter>
  )
}