export const actualizarIdioma = () => {

  let idiomaGuardado = localStorage.getItem('idioma')

  if (typeof idiomaGuardado === 'string') {
    return idiomaGuardado
  } else{

    const codigo = navigator.language; // es-419
    const idioma = codigo.split('-')[0];  // 'es'

    // console.log(idioma)


    if (idioma === 'es' || idioma === 'pt') {

      localStorage.setItem('idioma', idioma)
      return idioma
      
    } else{
      localStorage.setItem('idioma', 'en')
      return 'en'
    }
  }
}