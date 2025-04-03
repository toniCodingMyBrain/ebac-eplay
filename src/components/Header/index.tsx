import { Link } from 'react-router-dom'

import { HeaderBar, Links, LinkItem, LinkCart } from './styles'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

export const Header = () => (
  <HeaderBar>
    <div>
      <Link to={'/'}>
        <img src={logo} alt="EPlay" />
      </Link>
      <nav>
        <Links>
          <LinkItem>
            <Link to={'/categories'}>Categorias</Link>
          </LinkItem>
          <LinkItem>
            <Link to={'#'}>Novidades</Link>
          </LinkItem>
          <LinkItem>
            <Link to={'#'}>Promoções</Link>
          </LinkItem>
        </Links>
      </nav>
    </div>
    <LinkCart href="#">
      0 - produtos(s)
      <img src={carrinho} alt="Carrinho" />
    </LinkCart>
  </HeaderBar>
)
