import { CSSProperties } from 'styled-components'
import { Container } from './styles'

type ProductCardNameProps = {
  name: string
  textAlign?: 'center' | 'left'
}

export function ProductCardName({ name, textAlign = 'center' }: ProductCardNameProps) {
  const style = { '--text-align': textAlign } as CSSProperties

  return <Container style={style}>{name}</Container>
}
