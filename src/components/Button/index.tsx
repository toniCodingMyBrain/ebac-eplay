import { ButtonContainer, ButtonLink } from './style'

export type ButtonProps = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
  variant?: 'primary' | 'secondary'
}

export const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  variant
}: ButtonProps) => {
  if (type === 'button') {
    return (
      <ButtonContainer
        type="button"
        title={title}
        variant={variant}
        onClick={onClick}
      >
        {children}
      </ButtonContainer>
    )
  }
  return (
    //? adicionado Casting porque o link não suporta tipos indefinidos
    <ButtonLink to={to as string} title={title}>
      {children}
    </ButtonLink>
  )
}
