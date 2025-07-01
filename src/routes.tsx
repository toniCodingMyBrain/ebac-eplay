import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Categories } from './pages/Categories'
import { Product } from './pages/Product'
import Checkout from './pages/Checkout'

/**
 * * Criando as rotas que atuarão no RouterProvider
 * ! é substituído pelo PageRoutes, porque os links têm que funcionar fora do RouterProvider
const InternRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/categories',
    element: <Categories />
  }
])
*/

// ? Criando as rotas externas ao RouterProvider com o browserRouter
// * Na rota de produto, tem um path parameter de id,
// * que vai redirecionar para o produto com aquele id.
const PageRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/product/:id" element={<Product />} />
    <Route path="/checkout" element={<Checkout />} />
  </Routes>
)

export default PageRoutes
