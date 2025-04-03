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
            <FooterLink>RPG</FooterLink>
          </li>
          <li>
            <FooterLink>Ação</FooterLink>
          </li>
          <li>
            <FooterLink>Aventura</FooterLink>
          </li>
          <li>
            <FooterLink>Esportes</FooterLink>
          </li>
          <li>
            <FooterLink>Simulação</FooterLink>
          </li>
          <li>
            <FooterLink>Estratégia</FooterLink>
          </li>
          <li>
            <FooterLink>FPS</FooterLink>
          </li>
        </FooterLinks>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso Rápido</SectionTitle>
        <FooterLinks>
          <li>
            <FooterLink>Novidades</FooterLink>
          </li>
          <li>
            <FooterLink>Promoções</FooterLink>
          </li>
          <li>
            <FooterLink>Em Breve</FooterLink>
          </li>
        </FooterLinks>
      </FooterSection>
      <p>&copy; {currentYear} - Todos os direitos reservados</p>
    </div>
  </FooterContainer>
)
