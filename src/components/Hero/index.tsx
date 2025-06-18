import { ProductBanner, Infos } from './styles'

import { Tag } from '../Tag'
import { Button } from '../Button'
import { Game } from '../../pages/Home'
import { priceFormat } from '../ProductList'

type HeroProps = {
  game: Game
}

export const Hero = ({ game }: HeroProps) => {
  return (
    <ProductBanner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <Infos>
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
            >
              Adicionar ao carrinho
            </Button>
          )}
        </Infos>
      </div>
    </ProductBanner>
  )
}
