import { createContext, useState, Dispatch, SetStateAction } from 'react'
import { actualizarIdioma } from '../helpers/actualizarIdioma'

/* i18n (solo si necesito cambuar configuracion de i18n)*/
import i18n from '../config/i18n'

////////////////////////////////////////////////////////////////////////////
type Props = {
  children: JSX.Element
}

interface LanguageContext {
  idioma: string
  setIdioma: Dispatch<SetStateAction<string>>
}

////////////////////////////////////////////////////////////////////////////
export const LanguageContext = createContext<LanguageContext>({} as LanguageContext)

////////////////////////////////////////////////////////////////////////////
//RECUPERAR EL IDIOMA GUARDADO DEL USUARIO Y ASIGNAR
const actualizarIdiomaUsuario = ()=>{
  const idiomaGuardado = actualizarIdioma()
  i18n.changeLanguage(idiomaGuardado)

  if (typeof idiomaGuardado === 'string') {
    return idiomaGuardado
  } else{
    return 'en'
  }
}

////////////////////////////////////////////////////////////////////////////
export const LanguageProvider = ({children}: Props) => {

  const [idioma, setIdioma] = useState(actualizarIdiomaUsuario)

  const sharedData:LanguageContext = {
    idioma,
    setIdioma
  }

  return (
    <LanguageContext.Provider value={sharedData}>
      {children}
    </LanguageContext.Provider>
  )
}
