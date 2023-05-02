export const comprobarSiEsFavorito = (id) => {
  
  // console.log('se comprobo si es favorito', id);

  //traer lista de local storage
  let misFavoritos = JSON.parse(localStorage.getItem('favoritos'))

  // console.log(misFavoritos)

  //comprobar si es un array
  if (Array.isArray(misFavoritos)) {
    
    //comprobar si este id esta dentro de los favoritos
    let resultado = misFavoritos.includes(id)

    return resultado
  } 

}
