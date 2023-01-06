import { traerDescripcion } from "./traerDescripcion"
import { traerEvoluciones } from "./traerEvoluciones"
import { traducirTipos } from "./traducirTipos"

///////////////////////////////////////////////////////
export const traerPokemon = async (pokemonID, idioma='es') => {

  // console.log(pokemonID)

  try {
    const peticion = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
    const data = await peticion.json()

    //OBTENER LAS VARIACIONES y eliminar los que tienen valor null/////////////////////////////
    //CAMBIAR DE NOMBRE LAS KEYS A ESPAÑOL, Y CREAR EL OBJETO FINAL DE LAS VARIACIONES/////////
    let valor =data.sprites.other.home
    let arrayDeVariaciones = []


    for (let key in valor) {
      if (valor[key] !== null) {

        let titulo = ''

        if (key === 'front_default') {
          titulo = 'Predeterminado'
        } else if (key === 'front_female'){
          titulo = 'Femenino'
        } else if (key === 'front_shiny'){
          titulo = 'Shiny'
        } else{
          titulo = 'Shiny Femenino'
        }

        //crear el objeto final
        arrayDeVariaciones.push(
          {
            nombre: titulo,
            imagen: valor[key]
          }
        )
      }
    }

    // console.log(arrayDeVariaciones)


    // console.log(pokemonID)
    //TRAER LAS EVOLUCIONES DEL POKEMON/////////////////////////////////////////////
    let evoluciones1 = await traerEvoluciones(pokemonID)

    // console.log(evoluciones1);
    // FINALMENTE CREAR EL OBJETO FINAL CON TODA LA INFORMACION//////////////////////

    // console.log(data.types); /* PROV */

    const POKEMON = {
      id: data.id,
      favorito: false,
      foto: data.sprites.other.home.front_default,

      variaciones: arrayDeVariaciones,

      nombre: data.forms[0].name,
      peso: data.weight / 10,
      altura: data.height / 10,
      tipos: traducirTipos(data.types, idioma),

      descripcion: await traerDescripcion(pokemonID, idioma),
      evoluciones: evoluciones1,

      hp: data.stats[0].base_stat,
      ataque: data.stats[1].base_stat,
      defensa: data.stats[2].base_stat,
      ataqueEspecial: data.stats[3].base_stat,
      defensaEspecial: data.stats[4].base_stat,
      velocidad: data.stats[5].base_stat,
    }

    // console.log(POKEMON);

    return POKEMON

  } catch (error) {
    console.log(error)
    return null
  }

}

