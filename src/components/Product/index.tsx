import { Tag } from '../Tag'
import { Card, Title, Description, Infos } from './style'

type ProductProps = {
  gameName: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
}

export const Product = ({
  gameName,
  category,
  system,
  description,
  infos,
  image
}: ProductProps) => (
  <Card>
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
