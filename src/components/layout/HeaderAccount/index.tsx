import { LoginModal } from '@/components/auth'
import { SigninButton } from '@/components/auth/SigninButton'
import { Person } from '@/components/icons'
import { Loader } from '@/components/shared'
import { useModal } from '@/hooks'
import { useSession } from 'next-auth/client'
import { HeaderAccountDropdown } from '..'
import { Container } from './styles'

export const HeaderAccount = () => {
  const [session, loading] = useSession()
  const modal = useModal()

  return (
    <Container>
      <LoginModal {...modal} />
      <i>
        <Person />
      </i>
      {loading && (
        <div>
          <Loader />
        </div>
      )}
      {!session && !loading && <SigninButton onClick={modal.openModal} />}
      {session && (
        <div>
          <span>Olá, {session?.user?.name}</span>
          <HeaderAccountDropdown
            links={[
              { title: 'Seus Pedidos', url: '/seus-pedidos' },
              {
                title: 'Configurações',
                subtitle: 'Dados de usuário, endereços, métodos de pagamentos.',
                url: '/minha-conta'
              }
            ]}
          />
        </div>
      )}
    </Container>
  )
}
