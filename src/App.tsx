import { LanguageProvider } from './context/LanguageContext'
import { AppRoutes } from './routers/AppRoutes'

export const App = () => {
  return (
    <div className='app'>
      <LanguageProvider>
        <AppRoutes/>
      </LanguageProvider>
    </div>
  )
}