import { Game } from '../../pages/Home'
import { priceFormat } from '../../utils'
import { Loader } from '../Loader'
import { Product } from '../Product'
import * as S from './style'

export type ProductListProps = {
  title: string
  background: 'gray' | 'black'
  gameList?: Game[]
  id?: string
  isLoading: boolean
}

export const ProductList = ({
  title,
  background,
  gameList,
  id,
  isLoading
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

  if (isLoading) {
    return <Loader />
  }

  return (
    <S.ProductContainer id={id} background={background}>
      <div className="container">
        <S.TitleSection>{title}</S.TitleSection>
        <S.List>
          {gameList &&
            gameList.map((game) => (
              <Product
                key={game.id}
                id={game.id}
                gameName={game.name}
                category={game.details.category}
                description={game.description}
                image={game.media.thumbnail}
                infos={getNameTags(game)}
                system={game.details.system}
              />
            ))}
        </S.List>
      </div>
    </S.ProductContainer>
  )
}
