import styled from 'styled-components'

import { Link } from 'react-router-dom'

import { colors } from '../../styles'
import { ButtonProps } from '.'

export const ButtonContainer = styled.button<ButtonProps>`
  border: 2px solid
    ${(ButtonProps) =>
      ButtonProps.variant === 'primary' ? colors.green : colors.white};
  color: ${colors.white};
  background-color: ${(ButtonProps) =>
    ButtonProps.variant === 'primary' ? colors.green : 'transparent'};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 8px;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  border: 2px solid ${colors.white};
  color: ${colors.white};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 8px;
  cursor: pointer;
`
