import { Game } from '../../models/Game'
import { Product } from '../Product'
import { List, ProductContainer, TitleSection } from './style'

export type ProductListProps = {
  title: string
  background: 'gray' | 'black'
  gameList: Game[]
}

export const ProductList = ({
  title,
  background,
  gameList
}: ProductListProps) => (
  <ProductContainer background={background}>
    <div className="container">
      <TitleSection>{title}</TitleSection>
      <List>
        {gameList.map((game) => (
          <Product
            key={game.id}
            gameName={game.gameName}
            category={game.category}
            description={game.description}
            image={game.image}
            infos={game.infos}
            system={game.system}
          />
        ))}
      </List>
    </div>
  </ProductContainer>
)
