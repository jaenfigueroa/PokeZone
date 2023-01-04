// import { traerListaNombres } from "./traer_lista_nombres"

///OBTNER ID DE CAD UNO
// let LISTA = []

// const traerID = async (nombre)=>{

//   LISTA = await traerListaNombres()
//   console.log(LISTA);
// }

// const obtenerID = (nombre) => {

//   console.log(LISTA);

//   let index = LISTA.findIndex(x => x == nombre)

//   console.log(index)
//   return index
// }


export const traerEvoluciones = async (pokemonId) => {

  // traerID()

  // console.log(pokemonId)
  /////////////////////////////////////////////////////////////////////////////////
  //PRIMERA PARTE - obtener la url que contiene la informacion de las evoluciones de un pokemon
  let peticion1 = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`)
  let data1 = await peticion1.json()

  let urlfinal = data1.evolution_chain.url
  // console.log(urlfinal)




  /////////////////////////////////////////////////////////////////////////////////
  //SEGUNDA PARTE, obtener un ARRAY DE NOMBRES de las evoluciones

  const evoluciones = [] /********/

  const peticion2 = await fetch(urlfinal);
  const data2 = await peticion2.json();
  
  let evolution = data2.chain;
  
      // console.log(evolution)
  while (evolution) {
    evoluciones.push(evolution.species.name);
    evolution = evolution.evolves_to[0];
  }

  // console.log(evoluciones);

  ////////////////////////////////////////////////////
  // OBTENER ID DEL POKEMON, A PARTIR DEL NOMBRE


  /////////////////////////////////////////////////////////////////////////////////
  //TERCERA PARTE, obtener un array con las url de las imagenes de las evoluciones

  const imagenes = [] /********/

    for (const nombre of evoluciones) {

      // console.log('nombre', nombre)

      // let id = obtenerID(nombre)



      // let id = traerID(nombre)
      // console.log(nombre)
      const peticion3 = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
      const data3 = await peticion3.json()

      // console.log(data3);

      let imagen = data3.sprites.other.home.front_default
      // let urlpre = data3.sprites.other.home.front_default

      // console.log(imagen);

      imagenes.push(imagen)

    }

  // console.log(imagenes);

  

  //CREAR UN OBJETO A PARTIR DE LOS 2 ARRYS, DE KEYS Y VALORES

  const arr = evoluciones.map((name, i) => ({ nombre: name, imagen: imagenes[i] }));

  // console.log(arr);
  
  return arr
}



