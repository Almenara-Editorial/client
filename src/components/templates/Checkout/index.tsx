import { Steps } from '@/components/checkout'
import { Sidebar } from '@/components/checkout'
import { CheckoutFormProvider } from '@/contexts'
import { Session } from 'next-auth'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Container } from './styles'

export type CheckoutTemplateProps = {
  session: Session | null
}

export function CheckoutTemplate({ session }: CheckoutTemplateProps) {
  const { query, replace } = useRouter()

  useEffect(() => {
    if (!query.step) {
      replace('/checkout?step=shipping')
    }
  }, [query.step, replace])

  return (
    <CheckoutFormProvider session={session}>
      <Container>
        <Steps />
      </Container>
      <Sidebar />
    </CheckoutFormProvider>
  )
}
