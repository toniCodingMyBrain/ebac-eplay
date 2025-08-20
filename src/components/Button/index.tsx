import * as S from './style'

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
      <S.ButtonContainer
        type="button"
        title={title}
        variant={variant}
        onClick={onClick}
      >
        {children}
      </S.ButtonContainer>
    )
  }
  return (
    //? adicionado Casting porque o link não suporta tipos indefinidos
    <S.ButtonLink to={to as string} title={title}>
      {children}
    </S.ButtonLink>
  )
}
