import { Product } from '../Product'
import { List, ProductContainer, TitleSection } from './style'

export type ProductListProps = {
  title: string
  background: 'gray' | 'black'
}

export const ProductList = ({ title, background }: ProductListProps) => (
  <ProductContainer background={background}>
    <div className="container">
      <TitleSection>{title}</TitleSection>
      <List>
        <Product
          gameName="GameName1"
          category="Ação"
          description="teste"
          image="https://fakeimg.pl/222x250"
          infos={['-10%', 'R$ 150,00']}
          system="Windows"
        />
        <Product
          gameName="GameName2"
          category="Ação"
          description="teste2"
          image="https://fakeimg.pl/222x250"
          infos={['-10%', 'R$ 150,00']}
          system="Windows"
        />
        <Product
          gameName="GameName3"
          category="Ação"
          description="teste3"
          image="https://fakeimg.pl/222x250"
          infos={['-10%', 'R$ 150,00']}
          system="Windows"
        />
        <Product
          gameName="GameName4"
          category="Ação"
          description="teste4"
          image="https://fakeimg.pl/222x250"
          infos={['-10%', 'R$ 150,00']}
          system="Windows"
        />
      </List>
    </div>
  </ProductContainer>
)
