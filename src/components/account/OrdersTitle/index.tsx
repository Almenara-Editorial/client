import { Container } from './styles'

type OrdersTitleProps = {
  titles: string[]
}

export function OrdersTitle({ titles }: OrdersTitleProps) {
  return (
    <Container>
      {titles.map((title) => (
        <div key={title}>{title}</div>
      ))}
    </Container>
  )
}
