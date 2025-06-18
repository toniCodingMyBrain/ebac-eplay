import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.gray};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: ${cores.white};
    font-weight: 500;
    transition: all 0.2s;

    &:hover {
      color: ${cores.green};
    }
  }
`

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`

export const LinkItem = styled.li`
  margin-right: 16px;
`

export const CartButton = styled.a`
  display: flex;
  cursor: pointer;
  align-items: center;

  img {
    margin-left: 16px;
  }
`
