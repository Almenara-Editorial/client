import { UseModalData } from '@/hooks'
import { Link, Modal } from '@/components/shared'
import { LoginModalHeader, LoginModalForm } from '..'
import { Container, NewAccountLink } from './styles'
import { useSession } from 'next-auth/client'
import { useEffect } from 'react'

type LoginModalProps = UseModalData

export const LoginModal = (props: LoginModalProps) => {
  const [session] = useSession()

  useEffect(() => {
    !!session && setTimeout(() => props.closeModal(), 800)
  }, [props, session])

  return (
    <Modal as={Container} {...props}>
      <LoginModalHeader />
      <LoginModalForm />
      <NewAccountLink>
        Não tem uma conta? <Link href="#">Crie agora.</Link>
      </NewAccountLink>
    </Modal>
  )
}

export default LoginModal
