import { SignInModal } from '@/components/auth'
import { SigninButton } from '@/components/auth/SigninButton'
import { Person } from '@/components/icons'
import { Anchor, Link, Loader } from '@/components/shared'
import { useModal } from '@/hooks'
import { signOut, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { HeaderAccountDropdown } from '..'
import { MediaMatch } from '../MediaMatch'
import { Container, User } from './styles'

type HeaderAccountProps = {
  withoutDropdown?: boolean
}

const links = [
  { title: 'Seus Pedidos', url: '/conta/seus-pedidos' },
  {
    title: 'Configurações',
    subtitle: 'Dados de usuário, endereços, métodos de pagamentos.',
    url: '/conta/configuracoes'
  }
]

export const HeaderAccount = ({ withoutDropdown }: HeaderAccountProps) => {
  const router = useRouter()
  const [session, loading] = useSession()
  const modal = useModal()

  function handleRedirectToSignin() {
    router.push('/entrar')
  }

  return (
    <Container>
      <User>
        <SignInModal {...modal} />
        <i>
          <Person />
        </i>
        {loading && (
          <div>
            <Loader />
          </div>
        )}
        {!session && !loading && (
          <>
            <MediaMatch greaterThan="medium">
              <SigninButton onClick={modal.openModal} />
            </MediaMatch>
            <MediaMatch lessThan="medium">
              <SigninButton onClick={handleRedirectToSignin} />
            </MediaMatch>
          </>
        )}
        {session && (
          <div>
            <span>Olá, {session?.user?.name}</span>
            {!withoutDropdown && <HeaderAccountDropdown links={links} />}
          </div>
        )}
      </User>
      {session && withoutDropdown && (
        <ul>
          {links.map((link) => (
            <li key={link.url}>
              <Link href={link.url} color="white">
                {link.title}
              </Link>
            </li>
          ))}
          <li>
            <Anchor color="white" as="button" onClick={() => signOut()}>
              Sair
            </Anchor>
          </li>
        </ul>
      )}
    </Container>
  )
}
