export const guardarFavorito = (id) => {
  
  // console.log('se esta guardando un nuevo pokemon:', id);

  //traer lista de local storage
  let miFavoritos = JSON.parse(localStorage.getItem('favoritos'))

  // console.log('lo que habia antes: ',miFavoritos)

  let nuevaLista = []

  //comprobar si es array o null
  if (miFavoritos !== null && Array.isArray(miFavoritos)) {
    
    //comprobar si ya esta guardada
    let resultado = miFavoritos.includes(id)

    //si el resultado es falso, guardar agregar en mis favoritos
    if (!resultado) {
      nuevaLista = [id, ...miFavoritos]
    } else{
      nuevaLista = [...miFavoritos]
    }

  } else{
    nuevaLista = [id]
  }
  
  // console.log('nueva lista antes de guardar el local:', nuevaLista);

  //guardar el local storage
  localStorage.setItem('favoritos', JSON.stringify(nuevaLista))
}
