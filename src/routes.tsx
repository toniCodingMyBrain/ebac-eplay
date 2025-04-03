import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Categories } from './pages/categories'

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

// Criando as rotas externas ao RouterProvider com o browserRouter
const PageRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
  </Routes>
)

export default PageRoutes
