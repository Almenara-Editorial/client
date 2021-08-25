import { UseModalData } from '@/hooks'
import { Link, Modal } from '@/components/shared'
import { LoginModalHeader, LoginModalForm } from '..'
import { Container, NewAccountLink } from './styles'

type LoginModalProps = UseModalData

export const LoginModal = (props: LoginModalProps) => {
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
