import React from 'react'
import ReactDOM from 'react-dom/client'
import { MisRutas } from './routers/MiRutas.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MisRutas/>
  </React.StrictMode>,
)
