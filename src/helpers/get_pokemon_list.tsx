export const getPokemonList = async () => {

  try {
    const peticion = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=892')
    const data = await peticion.json()

    //obtenemos un array de todos los pokemon
    let miArray = data.results

    //creamos un nuevo array, pero solo con los nombres
    let nuevoArray = miArray.map((elemento) => elemento = elemento.name)

    // console.log(nuevoArray);

    return nuevoArray

  } catch (error) {
    console.log(error)
  }

}
