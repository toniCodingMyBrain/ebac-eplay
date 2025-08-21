import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

import { Button } from '../Button'
import * as S from './styles'
import { Tag } from '../Tag'

import { getTotalPrice, priceFormat } from '../../utils'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const linkToCheckout = () => {
    navigate('/checkout')
    closeCart()
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        <ul>
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <img src={item.media.thumbnail} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{priceFormat(item.prices.current)}</span>
              </div>
              <button type="button" onClick={() => removeItem(item.id)} />
            </S.CartItem>
          ))}
        </ul>
        <S.Quantity>
          {items.length +
            `${items.length > 1 ? ' jogos ' : ' jogo '}` +
            'no carrinho.'}
        </S.Quantity>
        <S.Prices>
          Total de {priceFormat(getTotalPrice(items))}
          <span>Em até 6x sem juros</span>
        </S.Prices>
        <Button
          type="button"
          variant="primary"
          title="Clique aqui para continuar com a compra"
          onClick={linkToCheckout}
        >
          comprar
        </Button>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
