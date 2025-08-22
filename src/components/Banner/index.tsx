/* eslint-disable react/no-unescaped-entities */
import * as S from './styles'

import { useGetFeaturedGamesQuery } from '../../services/api'
import { priceFormat } from '../../utils'

import { Loader } from '../Loader'
import { Tag } from '../Tag'
import { Button } from '../Button'

export const Banner = () => {
  const { data: game } = useGetFeaturedGamesQuery()

  if (!game) {
    return <Loader />
  }

  return (
    <S.Image style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <S.Title>{game?.name}</S.Title>
          <S.Prices>
            De <span>{priceFormat(game?.prices.old)}</span> por apenas{' '}
            {priceFormat(game?.prices.current)}.
          </S.Prices>
        </div>
        <Button
          type="link"
          to="/produto"
          title="Clique aqui para aproveitar esta oferta."
        >
          Aproveitar
        </Button>
      </div>
    </S.Image>
  )
}
