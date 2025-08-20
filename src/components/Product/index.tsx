import { Tag } from '../Tag'
import * as S from './style'

type ProductProps = {
  gameName: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
  id: number
}

export const Product = ({
  gameName,
  category,
  system,
  description,
  infos,
  image,
  id
}: ProductProps) => {
  const getDescription = (descArg: string) => {
    if (descArg.length > 95) {
      return descArg.slice(0, 92).concat('...')
    }
    return descArg
  }

  return (
    <S.Card
      title={`Clique aqui para ver mais detalhes do jogo ${gameName}.`}
      to={`/product/${id}`}
    >
      <img src={image} alt={gameName} />
      <S.Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </S.Infos>
      <S.Title>{gameName}</S.Title>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <S.Description>{getDescription(description)}</S.Description>
    </S.Card>
  )
}
