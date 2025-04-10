import { ProductBanner, Infos } from './styles'

import bannerProductImg from '../../assets/images_routes/fundo_hogwarts.png'
import { Tag } from '../Tag'
import { Button } from '../Button'

export const Hero = () => {
  return (
    <ProductBanner style={{ backgroundImage: `url(${bannerProductImg})` }}>
      <div className="container">
        <div>
          <Tag>RPG</Tag>
          <Tag>PS5</Tag>
        </div>
        <Infos>
          <h2>Hogwarts Legacy</h2>
          <p>
            <span>De R$ 250,00</span>
            Por R$ 190,00
          </p>
          <Button
            title="Clique para adicionar ao carrinho"
            variant="primary"
            type={'button'}
          >
            Adicionar ao carrinho
          </Button>
        </Infos>
      </div>
    </ProductBanner>
  )
}
