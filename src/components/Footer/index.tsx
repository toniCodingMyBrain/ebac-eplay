import {
  FooterContainer,
  SectionTitle,
  FooterLinks,
  FooterLink,
  FooterSection
} from './style'

const currentYear = new Date().getFullYear()

export const Footer = () => (
  <FooterContainer>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <FooterLinks>
          <li>
            <FooterLink to="/categories/#rpg">RPG</FooterLink>
          </li>
          <li>
            <FooterLink to="/categories/#action">Ação</FooterLink>
          </li>
          <li>
            <FooterLink to="/categories/#sports">Esportes</FooterLink>
          </li>
          <li>
            <FooterLink to="/categories/#simulation">Simulação</FooterLink>
          </li>
          <li>
            <FooterLink to="/categories/#fight">Luta</FooterLink>
          </li>
        </FooterLinks>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso Rápido</SectionTitle>
        <FooterLinks>
          <li>
            <FooterLink to="/#on-sale">Promoções</FooterLink>
          </li>
          <li>
            <FooterLink to="/#coming-soon">Em Breve</FooterLink>
          </li>
        </FooterLinks>
      </FooterSection>
      <p>&copy; {currentYear} - Todos os direitos reservados</p>
    </div>
  </FooterContainer>
)
