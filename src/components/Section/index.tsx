import * as S from './styles'

export type SectionProps = {
  title: string
  background: 'black' | 'gray'
  children: React.ReactNode
}

export const Section = ({ title, background, children }: SectionProps) => {
  return (
    <S.SectionContainer background={background}>
      <div className="container">
        <S.SectionTitle>{title}</S.SectionTitle>
        {children}
      </div>
    </S.SectionContainer>
  )
}
