export const traducirTipos = (array, idioma) => {

  // console.log(array)

  const ARRAY_TRADUCIDO = array.map((elemento) => {

    if (idioma === 'es') {
      return elemento = dicc_para_Espanol[elemento.type.name]

    } else if (idioma === 'pt'){
      return elemento = dicc_para_portugues[elemento.type.name]

    } else{
      return elemento = dicc_para_ingles[elemento.type.name]
    }
  })
    

  // console.log(ARRAY_TRADUCIDO)

  return ARRAY_TRADUCIDO.join(' - ')
}






/// DICCIONARIOS /////////////////////////////////////
let dicc_para_Espanol = {
  'normal': 'Normal',
  'fire': 'Fuego',
  'water': 'Agua',
  'grass': 'Planta',
  'electric': 'Eléctrico',
  'ice': 'Hielo',
  'fighting': 'Lucha',
  'poison': 'Veneno',
  'ground': 'Tierra',
  'flying': 'Volador',
  'psychic': 'Psíquico',
  'bug': 'Bicho',
  'rock': 'Roca',
  'ghost': 'Fantasma',
  'dragon': 'Dragón',
  'dark': 'Siniestro',
  'steel': 'Acero',
  'fairy': 'Hada'
}


let dicc_para_portugues = {
  'normal': 'Normal',
  'fire': 'Fogo',
  'water': 'água',
  'grass': 'Grama',
  'electric': 'Elétrico',
  'ice': 'Gelo',
  'fighting': 'Luta',
  'poison': 'Veneno',
  'ground': 'Terra',
  'flying': 'Voador',
  'psychic': 'Psíquico',
  'bug': 'Inseto',
  'rock': 'Pedra',
  'ghost': 'Fantasma',
  'dragon': 'Dragão',
  'dark': 'Trevas',
  'steel': 'Aço',
  'fairy': 'Fada'
}

let dicc_para_ingles = {
  'normal': 'Normal',
  'fire': 'Fire',
  'water': 'Water',
  'grass': 'Grass',
  'electric': 'Electric',
  'ice': 'Ice',
  'fighting': 'Fighting',
  'poison': 'Poison',
  'ground': 'Ground',
  'flying': 'Flying',
  'psychic': 'Psychic',
  'bug': 'Bug',
  'rock': 'Rock',
  'ghost': 'Ghost',
  'dragon': 'Dragon',
  'dark': 'Dark',
  'steel': 'Steel',
  'fairy': 'Fairy'
}