import { useRef, useEffect, useState } from 'react'
import { getPokemonList } from '../../../helpers/get_pokemon_list'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export const Search = () => {

  const navigate = useNavigate()

  //TRADUCCIONES
  const { t } = useTranslation()

  //TRAER LISTA DE POKEMONES
  const [pokemonList, setPokemonList] = useState<string[]>([])

  useEffect(() => {
    getPokemonList()
      .then(list => setPokemonList(list))
      .catch(error => console.error(error))
  }, [])

  //FORMULARIO
  const form = useRef<HTMLFormElement>(null)
  const [listMatches, setListMatches] = useState<string[]>([]) //COINCIDENCIAS DE LA BUSQUEDA

  //BUSCAR COINCIDENCIAS
  const getMatches = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newListMatches: string[] = []
    const searchText = (e.target.value).toLowerCase() // traer el texto escrito

    pokemonList.forEach(pokemonName => {
      pokemonName.includes(searchText) && newListMatches.push(pokemonName)
    })

    setListMatches(newListMatches)
  }

  //BUSCAR EL POKEMON CAMBIAR DE PAGINA O MOSTRAR AVISO DE NO EXISTE
  const searchPokemon = (name: string) => {
    if (pokemonList.includes(name)) {
      const indice = pokemonList.findIndex(x => x === name) + 1
      navigate(`/pokemon/${indice}`)
    }
  }

  return (
    <form
      className='busqueda__formulario'
      ref={form}>
      <input
        type='text'
        className='busqueda__input'
        list='animales'
        name='searchText'
        placeholder={t('nombre-de-pokemon') || ''}
        id='input-busqueda'
        autoComplete='off'
        onChange={getMatches}></input>
      <button
        type='button'
        className='busqueda__boton'
      >
        {listMatches.length}
      </button>

      {/* CAJA DE COINCIDENCIAS DE NOMBRES */}
      {
        listMatches.length >= 1 && (
          <ul className='caja_recomendaciones' id='caja-recomendaciones'>
            {
              listMatches.map((name, index) => (
                <li key={index} onClick={() => searchPokemon(name)}>{name}</li>
              ))
            }
          </ul>
        )
      }
    </form>
  )
}