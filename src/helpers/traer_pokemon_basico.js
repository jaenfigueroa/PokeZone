import { traducirTipos } from "./traducirTipos"

export const traerPokemonBasico = async (nombre, idioma='es') => {

  // console.log(nombre)

  try {
    const peticion = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
    const data = await peticion.json()

    //ahora crear el objeto que voy a devolver

    const POKEMON = {
      id: data.id,
      foto: data.sprites.other.home.front_default,
      nombre: data.forms[0].name,
      tipos: traducirTipos(data.types, idioma),
    }

    // console.log(POKEMON);

    //devolver el nuevo pokemon
    return POKEMON

  } catch (error) {
    console.log(error)
    // return null
  }

}
