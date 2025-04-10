import styled from 'styled-components'

import { Link } from 'react-router-dom'

import { cores } from '../../styles'
import { ButtonProps } from '.'

export const ButtonContainer = styled.button<ButtonProps>`
  border: 2px solid
    ${(ButtonProps) =>
      ButtonProps.variant === 'primary' ? cores.green : cores.white};
  color: ${cores.white};
  background-color: ${(ButtonProps) =>
    ButtonProps.variant === 'primary' ? cores.green : 'transparent'};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 8px;
`

export const ButtonLink = styled(Link)`
  border: 2px solid ${cores.white};
  color: ${cores.white};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 8px;
`
