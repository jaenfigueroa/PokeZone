import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

///////////////////////////////////////////

i18n
  .use(initReactI18next) // "Pasa i18n a react-i18next"
  .init({
    resources: {
      es: {
        translation: {

          /* HEADER */
          "inicio":  'Inicio',
          'todos': 'Todos',
          'favoritos': 'Favoritos',

          /* INICIO - BUSCADOR */
          'buscar': 'Buscar',
          'nombre-de-pokemon': 'Nombre del pokemon',
          'no-existe': 'No existe',

          /* TDOOS */
          'Total de Resultados': 'Total de Resultados',

          /* POKEMON */
          'Dimensiones': 'Dimensiones',
          'Peso': 'Peso',
          'Altura': 'Altura',
          'Estadisticas': 'Estadisticas',
          'Ataque': 'Ataque',
          'Defensa': 'Defensa',
          'Ataque especial': 'Ataque especial',
          'Defensa especial': 'Defensa especial',
          'Velocidad': 'Velocidad',
          'Variaciones de apariencia': 'Variaciones de apariencia',
          'Proceso de evolucion': 'Proceso de evolucion',

          /* FAVORIOS */
          'Total de Favoritos': 'Total de Favoritos',

          /* FOOTER */
          'idioma': 'Idioma: Español',
          'elige': 'Elige tu idioma',
          "derechos": "Desarrollado por",

          /* PAGINA DE ERROR */
          '¡Ups! Página no encontrada': '¡Ups! Página no encontrada',
          'La página a la que intenta acceder no existe o ha sido movida.': 'La página a la que intenta acceder no existe o ha sido movida.',
          'Ir a la pagina de inicio': 'Ir a la pagina de inicio'
        }
      },
      en: {
        translation: {
          /* HEADER */
          'inicio': 'Home',
          'todos': 'All',
          'favoritos': 'Favorites',

          /* INICIO - BUSCADOR */
          'buscar': 'Search',
          'nombre-de-pokemon': 'Name of pokemon',
          'no-existe': 'Does not exist',

          /* TODOS */
          'Total de Resultados': 'Total Results',

          /* POKEMON */
          'Dimensiones': 'Dimensions',
          'Peso': 'Weight',
          'Altura': 'Height',
          'Estadisticas': 'Statistics',
          'Ataque': 'Attack',
          'Defensa': 'Defense',
          'Ataque especial': 'Special attack',
          'Defensa especial': 'Special defense',
          'Velocidad': 'Velocity',
          'Variaciones de apariencia': 'Appearance variations',
          'Proceso de evolucion': 'Evolution process',

          /* FAVORITOS */
          'Total de Favoritos': 'Total Favorites',


          /* FOOTER */
          'idioma': 'Language: English',
          'elige': 'Choose your language',
          "derechos": "Developed by",

          /* PAGIAN DE ERROR */
          '¡Ups! Página no encontrada': 'Oops! Page not found',
          'La página a la que intenta acceder no existe o ha sido movida.': 'The page you are trying to access does not exist or has been moved.',
          'Ir a la pagina de inicio': 'Go to home page'

        }
      },
    },

    lng: 'es', // seleccionar idioma por defecto de forma manual
    // lng: i18n.language, // para asignar el idioma automatica detectando
    fallbackLng: 'es',
  })


export default i18n