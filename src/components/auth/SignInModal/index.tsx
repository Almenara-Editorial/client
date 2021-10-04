import { UseModalData } from '@/hooks'
import { Modal } from '@/components/shared'
import { SignInModalHeader, SignInForm } from '..'
import { Container } from './styles'
import { useSession } from 'next-auth/client'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

type SignInModalProps = UseModalData

export const SignInModal = (props: SignInModalProps) => {
  const [session] = useSession()
  const router = useRouter()

  useEffect(() => {
    !!session && setTimeout(() => props.closeModal(), 800)
  }, [props, session])

  useEffect(() => {
    props.closeModal()

    //disabled to prevent infinite closing modal
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath])

  return (
    <Modal as={Container} {...props}>
      <SignInModalHeader />
      <SignInForm />
    </Modal>
  )
}

export default SignInModal
