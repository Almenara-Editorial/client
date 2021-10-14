import { ButtonLink, DownloadButton, Link } from '@/components/shared'
import { useCart, useCheckoutForm } from '@/contexts'
import { capitalizeFirstLetter } from '@/utils'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Container, Title, Body, ButtonGroup } from './styles'

export function Success() {
  const { createdOrder, createOrderError } = useCheckoutForm()
  const { resetCart } = useCart()
  const { push } = useRouter()

  useEffect(() => {
    resetCart()
  }, [resetCart])

  useEffect(() => {
    if (!createdOrder && !createOrderError) {
      push('/')
    }
  }, [createOrderError, createdOrder, push])

  if (!createdOrder && !createOrderError) {
    return null
  }

  if (createOrderError) {
    return (
      <Container>
        <Title>Parece que houve um problema com seu pagamento</Title>
        <Body>
          <p>{createOrderError}</p>
        </Body>
        <ButtonGroup>
          <ButtonLink href="/" outline color="neutral" size="rg-medium">
            Retornar para a loja
          </ButtonLink>
          <ButtonLink
            href="/checkout?step=shipping"
            color="neutral"
            size="rg-medium"
          >
            Tentar novamente
          </ButtonLink>
        </ButtonGroup>
      </Container>
    )
  }

  if (createdOrder) {
    return (
      <Container>
        <Title>
          {capitalizeFirstLetter(createdOrder.user?.fullName)}, obrigado por
          comprar conosco. Tenha uma boa leitura e volte sempre.
        </Title>
        <Body>
          <p>
            Os detalhes do pedido foram enviados para o email:{' '}
            {createdOrder.user?.email}
          </p>
          <p>
            Você receberá todas as atualizações do pedido por email e sempre que
            quiser pode consultar todos os detalhes em{' '}
            <Link href="/conta/seus-pedidos" size="sm">
              Conta &gt; Seus Pedidos
            </Link>
            .
          </p>
          <div>
            {createdOrder.payment.documentUrl && (
              <DownloadButton
                url={createdOrder.payment.documentUrl}
                text="Fazer o download do documento para pagamento"
              />
            )}
          </div>
        </Body>
        <ButtonLink href="/" outline color="neutral" size="rg-medium">
          Retornar para a loja
        </ButtonLink>
      </Container>
    )
  }

  return null
}
