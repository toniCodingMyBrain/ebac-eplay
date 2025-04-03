import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${cores.gray};
  padding: 32px 0;
  font-size: 14px;
`

export const SectionTitle = styled.h4`
  color: ${cores.white};
  font-size: 16px;
  font-weight: bold;
`

export const FooterLinks = styled.ul`
  display: flex;
  margin-top: 16px;
`
export const FooterLink = styled.a`
  color: ${cores.lightGray};
  text-decoration: none;
  margin-right: 8px;
`
export const FooterSection = styled.div`
  margin-bottom: 64px;
`
