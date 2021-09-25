import { Image } from '@/components/shared'
import {
  Container,
  Banner,
  Content,
  FormContainer,
  Title,
  Subtitle
} from './styles'

type AuthLayoutProps = {
  children: React.ReactNode
  title: string
  subtitle?: string
}

export function AuthLayout({ title, subtitle, children }: AuthLayoutProps) {
  return (
    <Container>
      <Banner>
        <Image src="/img/auth-bg.png" layout="fill" objectFit="cover" />
      </Banner>
      <Content>
        <div>
          <FormContainer>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            {children}
          </FormContainer>
        </div>
      </Content>
    </Container>
  )
}
