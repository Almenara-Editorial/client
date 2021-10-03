import { GetServerSideProps } from 'next'
import { CheckoutTemplate, CheckoutTemplateProps } from '@/components/templates'
import { getSession } from 'next-auth/client'

type CheckoutProps = CheckoutTemplateProps

export default function Checkout(props: CheckoutProps) {
  return <CheckoutTemplate {...props} />
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)

  return {
    props: {
      session
    }
  }
}
