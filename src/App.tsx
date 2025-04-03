import { BrowserRouter } from 'react-router-dom'

import PageRoutes from './routes'

import { Header } from './components/Header'
import { GlobalCss } from './styles'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <PageRoutes />
    </BrowserRouter>
  )
}

export default App
