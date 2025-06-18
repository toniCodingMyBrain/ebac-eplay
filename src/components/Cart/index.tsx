import { Button } from '../Button'
import {
  CartContainer,
  CartItem,
  Overlay,
  Prices,
  Quantity,
  Sidebar
} from './styles'

import starWars from '../../assets/images/star_wars.png'
import { Tag } from '../Tag'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { priceFormat } from '../ProductList'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
    console.log(isOpen)
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, proximoPreco) => {
      return (acumulador += proximoPreco.prices.current!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.media.thumbnail} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{priceFormat(item.prices.current)}</span>
              </div>
              <button type="button" onClick={() => removeItem(item.id)} />
            </CartItem>
          ))}
        </ul>
        <Quantity>
          {items.length +
            `${items.length > 1 ? ' jogos ' : ' jogo '}` +
            'no carrinho.'}
        </Quantity>
        <Prices>
          Total de {priceFormat(getTotalPrice())}{' '}
          <span>Em até 6x sem juros</span>
        </Prices>
        <Button type="button" title="Clique aqui para continuar com a compra">
          comprar
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
