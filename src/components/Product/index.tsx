import { Tag } from '../Tag'
import { Card, Title, Description, Infos } from './style'

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
  /**
   * Função de corte de descrição
   *
   * const getDescription = (desc: string) => {
   *  if (desc.length > 95) {
   *    return desc.slice(0, 92).concat('...')
   *  }
   *  return desc
   * }
   */

  return (
    <Card to={`/product/${id}`}>
      <img src={image} alt={gameName} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Title>{gameName}</Title>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <Description>{description}</Description>
    </Card>
  )
}
