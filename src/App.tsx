import { BrowserRouter } from 'react-router-dom'

import PageRoutes from './routes'

import { Header } from './components/Header'
import { GlobalCss } from './styles'
import { Footer } from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <PageRoutes />
      <Footer />
    </BrowserRouter>
  )
}

export default App
