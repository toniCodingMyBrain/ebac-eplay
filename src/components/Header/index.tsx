import { Link } from 'react-router-dom'

import { HeaderBar, Links, LinkItem, CartButton } from './styles'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'
import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

export const Header = () => {
  const dispatch = useDispatch()
  const { items: itemsInCart } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
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
      <CartButton onClick={openCart}>
        {itemsInCart.length} - produto{itemsInCart.length > 1 ? 's' : ''}
        <img src={carrinho} alt="Carrinho" />
      </CartButton>
    </HeaderBar>
  )
}
