import { SectionContainer, SectionTitle } from './styles'

export type SectionProps = {
  title: string
  background: 'black' | 'gray'
  children: React.ReactNode
}

export const Section = ({ title, background, children }: SectionProps) => {
  return (
    <SectionContainer background={background}>
      <div className="container">
        <SectionTitle>{title}</SectionTitle>
        {children}
      </div>
    </SectionContainer>
  )
}
