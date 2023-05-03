import { } from 'react'
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'
import { Sounds } from '../components/Sounds/Sounds'

type Props = {
  children: JSX.Element
}

export const Layout = ({children}: Props) => {
  return (
    <div>
      <Header/>

      <main className='main'>
        {children}
      </main>

      <Footer/>

      <Sounds/>
    </div>
  )
}