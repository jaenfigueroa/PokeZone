import {Routes, Route, HashRouter, Navigate} from 'react-router-dom'
import { Pagina404 } from '../pages/Pagina404/Pagina404'
import { Inicio } from '../pages/Inicio/Inicio'
import { Favoritos } from '../components/Favoritos/Favoritos'
import { SeccionPokemon } from '../components/SeccionPokemon/SeccionPokemon'
import { Todos } from '../pages/Todos/Todos'
import { Layout } from '../layout/Layout'

export const AppRoutes = () => {

  return (
    <HashRouter>

      <Layout>
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
      </Layout>

    </HashRouter>
  )
}