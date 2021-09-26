import { Container } from './styles'

type StepsHeaderItemProps = {
  active?: boolean
  stepNumber: number
  title: string
}

export const StepsHeaderItem = ({
  active,
  stepNumber,
  title,
  ...rest
}: StepsHeaderItemProps) => (
  <Container data-active={active} {...rest}>
    <span>{stepNumber}</span>
    {title}
  </Container>
)
