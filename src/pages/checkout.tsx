import { GetServerSideProps } from 'next'
import { CheckoutTemplate, CheckoutTemplateProps } from '@/components/templates'
import { protectedRoutes } from '@/utils/protectedRoutes'

type CheckoutProps = CheckoutTemplateProps

export default function Checkout(props: CheckoutProps) {
  return <CheckoutTemplate {...props} />
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await protectedRoutes(context)

  if (!session) return { props: {} }

  return {
    props: {
      session
    }
  }
}
