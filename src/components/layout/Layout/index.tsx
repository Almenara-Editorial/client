import { Header } from '..'
import { Container, Main } from './styles'

type LayoutProps = {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
    </Container>
  )
}
