import { ButtonLink, Link } from '@/components/shared'
import { Container, Title, Body } from './styles'

export function Success() {
  return (
    <Container>
      <Title>
        Obrigado por comprar conosco. Tenha uma boa leitura e volte sempre.
      </Title>
      <Body>
        <p>
          Os detalhes do pedido foram enviados para o email:
          mariajose@gmail.com.
        </p>
        <p>
          Você receberá todas as atualizações do pedido por email e sempre que
          quiser pode consultar todos os detalhes em{' '}
          <Link href="/conta/pedidos" size="sm">
            Conta &gt; Seus Pedidos
          </Link>
          .
        </p>
      </Body>
      <ButtonLink href="/" outline color="neutral" size="rg-medium">
        Retornar para a loja
      </ButtonLink>
    </Container>
  )
}
