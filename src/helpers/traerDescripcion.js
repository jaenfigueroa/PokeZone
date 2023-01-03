export const traerDescripcion = async (nombre) => {
  try {
    const peticion = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${nombre}`)
    const data = await peticion.json()

    //obtener la
    let descripcion = data.flavor_text_entries.filter(x => x.language.name === 'es')[0].flavor_text

    // console.log(descripcion)
    return descripcion

  } catch (error) {
    console.log(error);
  }
}
