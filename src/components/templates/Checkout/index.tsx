import { Steps } from '@/components/checkout'
import { Sidebar } from '@/components/checkout'
import { CheckoutFormProvider } from '@/contexts'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Container } from './styles'

export function CheckoutTemplate() {
  const { query, replace } = useRouter()

  useEffect(() => {
    if (!query.step) {
      replace('/checkout?step=shipping')
    }
  }, [query.step, replace])

  return (
    <CheckoutFormProvider>
      <Container>
        <Steps />
      </Container>
      <Sidebar />
    </CheckoutFormProvider>
  )
}
