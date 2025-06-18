import styled from 'styled-components'
import { cores } from '../../styles'
import { HashLink } from 'react-router-hash-link'

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

//? Usando HashLink da lib: react-router-hash-links. Garante que ao ir pra rota também ir à sessão da rota.
//* npm install react-router-hash-link
//* npm install @types/react-router-hash-link
export const FooterLink = styled(HashLink)`
  color: ${cores.lightGray};
  text-decoration: none;
  margin-right: 8px;
`
export const FooterSection = styled.div`
  margin-bottom: 64px;
`
