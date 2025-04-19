import styled from 'styled-components'

import { ProductListProps } from '.'
import { cores } from '../../styles'
import { Card } from '../Product/style'

/**
 * ? O tipo "Omit" serve para omitir a passagem de alguma das propriedades
 * * <Omit<Argumento, Propriedade_omitida>>
 */
export const ProductContainer = styled.section<
  Omit<ProductListProps, 'title' | 'gameList'>
>`
  padding: 32px 0;

  background-color: ${(ProductListProps) =>
    ProductListProps.background === 'black' ? cores.black : cores.gray};

  ${Card} {
    background-color: ${(ProductListProps) =>
      ProductListProps.background === 'black' ? cores.gray : cores.black};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;
  margin-top: 40px;
`

export const TitleSection = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
