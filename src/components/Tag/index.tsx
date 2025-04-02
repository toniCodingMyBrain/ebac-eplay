import { TagContainer } from './style'

export type TagProps = {
  size?: 'small' | 'big'
  children: JSX.Element | string
}

export const Tag = ({ children, size }: TagProps) => (
  <TagContainer size={size}>{children}</TagContainer>
)
