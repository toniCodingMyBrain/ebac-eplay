import * as S from './styles'

import { Tag } from '../Tag'
import { Button } from '../Button'
import { Game } from '../../pages/Home'
import { priceFormat } from '../ProductList'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

type HeroProps = {
  game: Game
}

export const Hero = ({ game }: HeroProps) => {
  const dispatch = useDispatch()

  const handleAddCart = () => {
    dispatch(add(game))
    dispatch(open())
  }

  return (
    <S.ProductBanner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <S.Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>De {priceFormat(game.prices.current)}</span>
            )}
            {game.prices.current && (
              <span>Por {priceFormat(game.prices.current)}</span>
            )}
          </p>
          {game.prices.current && (
            <Button
              title="Clique para adicionar ao carrinho"
              variant="primary"
              type={'button'}
              onClick={handleAddCart}
            >
              Adicionar ao carrinho
            </Button>
          )}
        </S.Infos>
      </div>
    </S.ProductBanner>
  )
}
