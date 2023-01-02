export const traerListaLocal = () => {
  
  //traer lista de local storage
  let lista = JSON.parse(localStorage.getItem('lista'))

  //comprobamos que lo que traemos sea un array
  if (Array.isArray(lista)) {
    return lista
  } else{
    return []
  }
};
