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

          /* FOOTER */
          'idioma': 'Idioma: Español',
          'elige': 'Elige tu idioma',
          "derechos": "Desarrollado por",
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

          /* FOOTER */
          'idioma': 'Language: English',
          'elige': 'Choose your language',
          "derechos": "Developed by",
        }
      },
    },

    lng: 'es', // seleccionar idioma por defecto de forma manual
    // lng: i18n.language, // para asignar el idioma automatica detectando
    fallbackLng: 'es',
  })


export default i18n