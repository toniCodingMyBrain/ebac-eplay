import styled from 'styled-components'
import { colors } from '../../styles'
import { TagProps } from './index'

export const TagContainer = styled.div<TagProps>`
  background-color: ${colors.green};
  color: ${colors.white};
  font-weight: bold;
  padding: 4px 6px;
  border-radius: 8px;
  display: inline-block;
  text-align: center;
  // Adicionando dinamicidade nos padrões da Tag
  font-size: ${(tagProps) => (tagProps.size === 'big' ? '16px' : '10px')};
  padding: ${(tagProps) =>
    tagProps.size === 'small' ? '9px 16px' : '4px 6px'};
`
