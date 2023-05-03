import { traerListaNombres } from "./traer_lista_nombres"

export const obteneridPorNombre = async (nombre) => {
  

  //traer toda la lista de pokemon
  let lista = await traerListaNombres()


  let id = lista.findIndex(x => x === nombre)


  console.log(nombre);
  console.log(id)
  console.log(lista);
}
