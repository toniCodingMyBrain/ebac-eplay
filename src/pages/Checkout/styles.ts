import styled from 'styled-components'
import { cores } from '../../styles'

type InputGroupProps = {
  maxWidth?: string
  marginTop?: string
}

type RowProps = {
  marginTop?: string
}

type TabButtonProps = {
  isActive: boolean
}

export const Row = styled.div<RowProps>`
  display: flex;
  column-gap: 24px;
  align-items: flex-end;

  margin-top: ${(props) => props.marginTop || 'auto'};
`
export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;

  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }

  input,
  select {
    background-color: ${cores.white};
    height: 32px;
    padding: 0 8px;
    border: 1px solid ${cores.white};
    width: 100%;
  }
`

export const TabButton = styled.button<TabButtonProps>`
  cursor: pointer;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  color: ${cores.white};
  background-color: ${(props) => (props.isActive ? cores.green : cores.black)};
  height: 32px;
  border: none;
  margin-right: 16px;
  padding: 0 8px;

  img {
    margin-right: 8px;
  }
`
