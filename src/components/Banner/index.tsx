/* eslint-disable react/no-unescaped-entities */
import { Imagem, Titulo, Precos } from './styles'
import { priceFormat } from '../ProductList'

import { Tag } from '../Tag'
import { Button } from '../Button'
import { useGetFeaturedGamesQuery } from '../../services/api'

export const Banner = () => {
  const { data: game } = useGetFeaturedGamesQuery()

  if (!game) {
    return <strong>Carregando...</strong>
  }

  return (
    <Imagem style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>{game?.name}</Titulo>
          <Precos>
            De <span>{priceFormat(game?.prices.old)}</span> por apenas{' '}
            {priceFormat(game?.prices.current)}.
          </Precos>
        </div>
        <Button
          type="link"
          to="/produto"
          title="Clique aqui para aproveitar esta oferta."
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}
