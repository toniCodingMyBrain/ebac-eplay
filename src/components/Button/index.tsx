import { ButtonContainer, ButtonLink } from './style'

type ButtonProps = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
}

export const Button = ({ type, title, to, onClick, children }: ButtonProps) => {
  if (type === 'button') {
    return (
      <ButtonContainer type="button" title={title} onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  }
  return (
    // adicionado Casting porque o link não suporta tipos indefinidos
    <ButtonLink to={to as string} title={title}>
      {children}
    </ButtonLink>
  )
}
