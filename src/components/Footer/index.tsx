import * as S from './style'

const currentYear = new Date().getFullYear()

export const Footer = () => (
  <S.FooterContainer>
    <div className="container">
      <S.FooterSection>
        <S.SectionTitle>Categorias</S.SectionTitle>
        <S.FooterLinks>
          <li>
            <S.FooterLink
              title="Clique aqui para acessar jogos de RPG"
              to="/categories/#rpg"
            >
              RPG
            </S.FooterLink>
          </li>
          <li>
            <S.FooterLink
              title="Clique aqui para acessar jogos de Ação"
              to="/categories/#action"
            >
              Ação
            </S.FooterLink>
          </li>
          <li>
            <S.FooterLink
              title="Clique aqui para acessar jogos de Esportes"
              to="/categories/#sports"
            >
              Esportes
            </S.FooterLink>
          </li>
          <li>
            <S.FooterLink
              title="Clique aqui para acessar jogos de Simulação"
              to="/categories/#simulation"
            >
              Simulação
            </S.FooterLink>
          </li>
          <li>
            <S.FooterLink
              title="Clique aqui para acessar jogos de Luta"
              to="/categories/#fight"
            >
              Luta
            </S.FooterLink>
          </li>
        </S.FooterLinks>
      </S.FooterSection>
      <S.FooterSection>
        <S.SectionTitle>Acesso Rápido</S.SectionTitle>
        <S.FooterLinks>
          <li>
            <S.FooterLink
              title="Clique aqui para acessar a seção Em Promoção"
              to="/#on-sale"
            >
              Promoções
            </S.FooterLink>
          </li>
          <li>
            <S.FooterLink
              title="Clique aqui para acessar seção Em Breve"
              to="/#coming-soon"
            >
              Em Breve
            </S.FooterLink>
          </li>
        </S.FooterLinks>
      </S.FooterSection>
      <p>&copy; {currentYear} - Todos os direitos reservados</p>
    </div>
  </S.FooterContainer>
)
