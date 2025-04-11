import styled from 'styled-components'
import { SectionProps } from '.'
import { cores } from '../../styles'
import { Card } from '../Product/style'

/**
 * ? O tipo "Omit" serve para omitir a passagem de alguma das propriedades
 * * <Omit<Argumento, Propriedade_omitida>>
 */
export const SectionContainer = styled.section<
  Omit<SectionProps, 'title' | 'gameList'>
>`
  padding: 32px 0;

  background-color: ${(ProductListProps) =>
    ProductListProps.background === 'black' ? cores.black : cores.gray};

  ${Card} {
    background-color: ${(ProductListProps) =>
      ProductListProps.background === 'black' ? cores.gray : cores.black};
  }

  p {
    font-size: 14px;
    line-height: 22px;
    max-width: 640px;
  }
`

export const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 40px;
`
