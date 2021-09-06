import { FooterModel } from '@/models'
import { Header, Footer } from '..'
import { Container, Main } from './styles'

type LayoutProps = {
  children: React.ReactNode
  footer: FooterModel
}

export function Layout({ children, footer }: LayoutProps) {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
      <Footer footer={footer} />
    </Container>
  )
}
