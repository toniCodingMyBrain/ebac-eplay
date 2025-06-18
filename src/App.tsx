import { BrowserRouter } from 'react-router-dom'

import PageRoutes from './routes'

import { Header } from './components/Header'
import { GlobalCss } from './styles'
import { Footer } from './components/Footer'
import { Provider } from 'react-redux'
import { store } from './store'
import Cart from './components/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <div className="container">
          <Header />
        </div>
        <PageRoutes />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
