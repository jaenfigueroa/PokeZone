export const traerEvoluciones = async (pokemonId) => {

  // console.log(pokemonId)
  /////////////////////////////////////////////////////////////////////////////////
  //PRIMERA PARTE: obtener la url que contiene la informacion de las evoluciones de un pokemon
  let peticion1 = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`)
  let data1 = await peticion1.json()

  // console.log(data1)
  // console.log(data1);

  let urlfinal = data1.evolution_chain.url

  // console.log(urlfinal)


  if (urlfinal === null) {
    return null
  }

  /////////////////////////////////////////////////////////////////////////////////
  //SEGUNDA PARTE: obtener un ARRAY DE NOMBRES de las evoluciones

  const nombresEvoluciones = [] /********/
  const idEnUrlEvoluciones = [] /*******/

  const peticion2 = await fetch(urlfinal);
  const data2 = await peticion2.json();
  
  let evolution = data2.chain;
  
  // console.log(evolution)

  while (evolution) {
    nombresEvoluciones.push(evolution.species.name);

    idEnUrlEvoluciones.push(evolution.species.url)
    evolution = evolution.evolves_to[0];
  }

  // console.log(nombresEvoluciones);
  // console.log(idEnUrlEvoluciones);


  /////////////////////////////////////////////////////////////////////////////////
  //TERCERA PARTE: obtener un array con las url de las imagenes de las evoluciones

  const urlImagenes = [] /********/

    for (const url of idEnUrlEvoluciones) {

      //OBTENER EL ID, A PARTIR DE LAS URL DE LAS IMAGENES
      const partes = url.split('/')
      const numero = partes[partes.length - 2]

      //AHORA SI REALIZAR LA PETICION
      const peticion3 = await fetch(`https://pokeapi.co/api/v2/pokemon/${numero}`)
      const data3 = await peticion3.json()
      // console.log(data3);

      let urlImagen = data3.sprites.other.home.front_default
      // console.log(urlImagen);

      urlImagenes.push(urlImagen)
    }

  // console.log(urlImagenes);

  
  /////////////////////////////////////////////////////////////////////////////////
  //CUARTA PARTE: CREAR UN ARRAY DE OBJETOS A PARTIR DE LOS 2 ARRYS DE ARRIBA, DE KEYS(nombresEvoluciones) Y VALORES(urlImagenes)

  const objetoFinal = nombresEvoluciones.map((name, i) => ({ nombre: name, imagen: urlImagenes[i] }));

  // console.log(objetoFinal);
  
  return objetoFinal
}


