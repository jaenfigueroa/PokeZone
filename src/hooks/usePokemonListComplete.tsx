import { useState, useEffect } from 'react'
import { getPokemonList } from '../helpers/get_pokemon_list'

export const usePokemonListComplete = () => {
  const [pokemonListComplete, setPokemonListComplete] = useState<string[]>()

  useEffect(() => {
    getPokemonList()
      .then(data => setPokemonListComplete(data))
  }, [])

  return [
    pokemonListComplete
  ]
}