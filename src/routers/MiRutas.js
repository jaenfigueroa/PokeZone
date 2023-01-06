import React from 'react'
import {Routes, Route, HashRouter, Navigate} from 'react-router-dom'
import { Inicio } from '../components/Busqueda/Inicio'
import { Favoritos } from '../components/Favoritos/Favoritos'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import { Pagina404 } from '../components/Pagina404/Pagina404'
import { SeccionPokemon } from '../components/SeccionPokemon/SeccionPokemon'
import { Todos } from '../components/Todos/Todos'

export const MisRutas = () => {

  // let [idioma, setIdioma] = useState('es')


  return (
    <HashRouter>

      {/* HEADER Y NAVEGACION */}
      <Header/>

      {/* CUERPO */}
      <main className='main'>
        <Routes>
          <Route path='/' element={<Navigate to='/inicio'/>}/>
          <Route path='/inicio' element={<Inicio/>}/>

          <Route path='/todos' element={<Navigate to='/todos/1'/>}/>
          <Route path='/todos/:numeroPagina' element={<Todos/>}/>

          <Route path='/pokemon/' element={<Navigate to='/pokemon/aleatorio'/>}/>
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