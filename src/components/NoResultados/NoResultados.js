import React from 'react'
import './NoResultados.css'
import ImagenNoResultados from '../../assets/ImagenNoResultados'

export const NoResultados = () => {
  return (
    <div className='caja-noResultados'>
      <ImagenNoResultados className='noResultados__imagen'/>
      <h4 className='noResultados__titulo'>¡Vaya!...No se ha encontrado resultados</h4>
    </div>
  )
}
