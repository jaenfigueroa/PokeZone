export const quitarFavorito = (id) => {
 
  // console.log('se esta quitando de favorito a:', id)

  //traer lista de local storage

  let string = localStorage.getItem('favoritos')

  if (string) {
    let misFavoritos = JSON.parse(string);
    let nuevaLista = []
    
    //comprobar que sea un array
    if (Array.isArray(misFavoritos)) {
  
      //eliminar ese pokemon de la lista de favs
      nuevaLista = misFavoritos.filter(elemento => elemento !== id)
    } 

    localStorage.setItem('favoritos', JSON.stringify(nuevaLista))

  } else{

    //actualizar local storage
    localStorage.setItem('favoritos', JSON.stringify([]))
  }
}
