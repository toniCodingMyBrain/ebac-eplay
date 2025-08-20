import * as S from './style'

export type TagProps = {
  size?: 'small' | 'big'
  children: JSX.Element | string
}

export const Tag = ({ children, size }: TagProps) => (
  <S.TagContainer size={size}>{children}</S.TagContainer>
)
