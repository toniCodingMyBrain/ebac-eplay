import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/style'
import { Link } from 'react-router-dom'

export const Card = styled(Link)`
  background-color: ${cores.gray};
  border-radius: 8px;
  padding: 8px;
  position: relative;
  text-decoration: none;
  color: ${cores.white};
  display: block;

  img {
    display: block;
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 600;
  height: 46px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  flex: 1;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
