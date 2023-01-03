export const traerPokemonBasico = async (nombre) => {

  // console.log(nombre)

  try {
    const peticion = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
    const data = await peticion.json()


    // console.log(data.sprites.other.home);
    //ahora crear el objeto que voy a devolver
    const POKEMON = {
      id: data.id,
      // foto: data.sprites.other.dream_world.front_default,
      foto: data.sprites.other.home.front_default,
      nombre: data.forms[0].name,
      tipos: convertirTipos(data.types),
    }

    // console.log(POKEMON);
    //devolver el nuevo pokemon
    return POKEMON

  } catch (error) {
    console.log(error)
    // return null
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