import { traerDescripcion } from "./traerDescripcion"


///////////////////////////////////////////////////////
export const traerPokemon = async (nombre) => {

  // console.log(nombre)

  try {
    const peticion = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
    const data = await peticion.json()

    //ahora crear el objeto que voy a devolver
    const POKEMON = {
      id: data.id,
      favorito: false,
      // foto: data.sprites.other.dream_world.front_default,
      foto: data.sprites.other.home.front_default,
      nombre: data.forms[0].name,
      peso: data.weight / 10,
      altura: data.height / 10,
      tipos: convertirTipos(data.types),

      descripcion: await traerDescripcion(nombre),

      hp: data.stats[0].base_stat,
      ataque: data.stats[1].base_stat,
      defensa: data.stats[2].base_stat,
      ataqueEspecial: data.stats[3].base_stat,
      defensaEspecial: data.stats[4].base_stat,
      velocidad: data.stats[5].base_stat
    }

    // console.log(POKEMON);
    //devolver el nuevo pokemon
    return POKEMON

  } catch (error) {
    console.log(error)
    return null
  }

}


//////////////////////////////////

//convertir array de los tipos en un string usable

const convertirTipos = (array) =>{
  let string = []

  array.forEach(elemento => {
    let tipo = elemento.type.name
    string.push(tipo)
  });

  return string.join(' | ')
}