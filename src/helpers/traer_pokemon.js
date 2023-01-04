import { traerDescripcion } from "./traerDescripcion"
import { traerEvoluciones } from "./traerEvoluciones"


///////////////////////////////////////////////////////
export const traerPokemon = async (nombre) => {

  // console.log(nombre)

  try {
    const peticion = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
    const data = await peticion.json()


    //OBTENER LOS SPRITES VALIDOS///////////////////
    let valor =data.sprites.other.home
    let array = Object.values(valor)
    let spritess = array.filter(x => x !== null)
    ///////////////////////////////////////////////


    let evoluciones1 = await traerEvoluciones(nombre)


    
    //ahora crear el objeto que voy a devolver
    const POKEMON = {
      id: data.id,
      favorito: false,
      // foto: data.sprites.other.dream_world.front_default,
      foto: data.sprites.other.home.front_default,

      sprites: spritess,

      nombre: data.forms[0].name,
      peso: data.weight / 10,
      altura: data.height / 10,
      tipos: convertirTipos(data.types),

      descripcion: await traerDescripcion(nombre),
      evoluciones: evoluciones1,

      hp: data.stats[0].base_stat,
      ataque: data.stats[1].base_stat,
      defensa: data.stats[2].base_stat,
      ataqueEspecial: data.stats[3].base_stat,
      defensaEspecial: data.stats[4].base_stat,
      velocidad: data.stats[5].base_stat,
    }

    // console.log(POKEMON);


    console.log(POKEMON);

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



