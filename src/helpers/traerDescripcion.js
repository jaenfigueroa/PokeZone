export const traerDescripcion = async (nombre, idioma) => {
  try {
    const peticion = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${nombre}`)
    const data = await peticion.json()

    console.log(data);
    //obtener la

    let descripcion = ''

    if (idioma === 'es') {
      descripcion = data.flavor_text_entries.filter(x => x.language.name === 'es')[0].flavor_text
      
    // } else if (idioma == 'pt'){
    //   descripcion = data.flavor_text_entries.filter(x => x.language.name === 'pt')[0].flavor_text

    } else{
      descripcion = data.flavor_text_entries.filter(x => x.language.name === 'en')[0].flavor_text
    }

    // console.log(descripcion)
    return descripcion

  } catch (error) {
    console.log(error);
  }
}
