import { Game } from '../../pages/Home'
import { Product } from '../Product'
import { List, ProductContainer, TitleSection } from './style'

export type ProductListProps = {
  title: string
  background: 'gray' | 'black'
  gameList: Game[]
}

export const priceFormat = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

export const ProductList = ({
  title,
  background,
  gameList
}: ProductListProps) => {
  const getNameTags = (game: Game) => {
    const tags = []

    if (game.release_date) {
      tags.push(game.release_date)
    }

    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
      tags.push(priceFormat(game.prices.discount))
    }

    if (game.prices.current) {
      tags.push(priceFormat(game.prices.current))
    }

    return tags
  }

  return (
    <ProductContainer background={background}>
      <div className="container">
        <TitleSection>{title}</TitleSection>
        <List>
          {gameList.map((game) => (
            <Product
              key={game.id}
              gameName={game.name}
              category={game.details.category}
              description={game.description}
              image={game.media.thumbnail}
              infos={getNameTags(game)}
              system={game.details.system}
            />
          ))}
        </List>
      </div>
    </ProductContainer>
  )
}
