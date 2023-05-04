import './Todos.scss'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Nav } from '../../components/Nav/Nav'
import { NotFound } from '../NotFound/NotFound'
import { Tarjeta } from '../../components/Tarjeta/Tarjeta'
import { useTranslation } from 'react-i18next'
import { usePokemonListComplete } from '../../hooks/usePokemonListComplete'

interface Pokemon{
  name: string,
  url: string
}

export const Todos = () => {
  const {t} = useTranslation()
  const {numeroPagina} = useParams()
  const [pokemonListComplete] = usePokemonListComplete()

  const [numberPage, setNumberPage] = useState<number>(Number(numeroPagina))
  const [pokemonListPage, setPokemonLisPage] = useState<Pokemon[]>([])

  useEffect(() => {
    setNumberPage(Number(numeroPagina))
  }, [numeroPagina])

  //TRAER TODA LA LISTA DE POKEMONES DE LA PAGINA ACTUAL
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${(numberPage * 9) - 9}&limit=9`)
      .then((response) => response.json())
      .then((data) => setPokemonLisPage(data.results))
      .catch((error) => console.log(error))
  }, [numberPage])

  ///////////////////////////////////////

  if (numberPage >= 1 && numberPage <= 99) {
    return (
      <section className='Todos'>

        {/* CANTIDAD DE RESULTADOS */}
        <p className='inicio__cantidad-resultados'>
          {t('Total de Resultados')} : <span className='resultados-numero'>891</span>
        </p>

        {/* CAJA DE LAS TARJETAS */}
        <section className='inicio__contenedor'>
          {
            pokemonListPage.map((pokemon, index) => {
              //usando el nombre, obtenemos el indice, y con ello el id del pokemon
              const name = pokemon.name

              if (pokemonListComplete) {
                const index = pokemonListComplete.findIndex(x => x === name)

                return <Tarjeta key={index} numero={index + 1} />
              }
            })
          }
        </section>

        {/* SECCION DE PAGINACION */}
        <Nav numero={Number(numberPage)} url='/todos/' ultimaPagina={99} />
      </section>
    )
  } else {
    return <NotFound />
  }
}
