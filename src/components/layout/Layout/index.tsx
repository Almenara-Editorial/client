import { HeaderModel, FooterModel } from '@/models'
import { Header, Footer } from '..'
import { Container, Main } from './styles'

type LayoutProps = {
  children: React.ReactNode
  footer: FooterModel
  header: HeaderModel
}

export function Layout({ children, header, footer }: LayoutProps) {
  return (
    <Container>
      <Header header={header} />
      <Main>{children}</Main>
      <Footer footer={footer} />
    </Container>
  )
}
