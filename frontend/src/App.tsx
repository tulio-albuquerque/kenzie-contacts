import { AuthProvider } from './providers/AuthProvider'
import { MainRouter } from './routes'
import GlobalStyle from './styles/GlobalStyle'

function App() {

  return (
    <>
      <GlobalStyle/>
      <AuthProvider>
        <MainRouter/>
      </AuthProvider>
    </>
  )
}

export default App
