import { } from 'react'
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'
import { LanguageProvider } from '../context/languageContext'

type Props = {
  children: JSX.Element
}

export const Layout = ({children}: Props) => {
  return (
    <div>
      <LanguageProvider>
        <>
          <Header/>

          <main className='main'>
            {children}
          </main>

          <Footer idioma={idioma} setIdioma ={setIdioma}/>
        </>
      </LanguageProvider>
    </div>
  )
}