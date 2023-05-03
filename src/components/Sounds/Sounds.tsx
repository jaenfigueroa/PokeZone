import audio_pikachu from '../../sounds/pikapikachu.mp3'
import audio_cambiar from '../../sounds/cambiar.mp3'
import audio_agregar from '../../sounds/agregar.wav'
import audio_quitar from '../../sounds/quitar2.wav'

export const Sounds = () => {
  return (
    <div className='contenedor-de-audios'>
      <audio src={audio_pikachu} controls id='audio_pikachu'></audio>
      <audio src={audio_cambiar} controls id='audio_cambiar'></audio>
      <audio src={audio_agregar} controls id='audio_agregar'></audio>
      <audio src={audio_quitar} controls id='audio_quitar'></audio>
    </div>
  )
}