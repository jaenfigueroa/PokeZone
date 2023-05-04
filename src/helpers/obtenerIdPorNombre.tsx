import { getPokemonList } from "./get_pokemon_list"

export const obteneridPorNombre = async (nombre) => {
  

  //traer toda la lista de pokemon
  let lista = await getPokemonList()


  let id = lista.findIndex(x => x === nombre)


  console.log(nombre);
  console.log(id)
  console.log(lista);
}
