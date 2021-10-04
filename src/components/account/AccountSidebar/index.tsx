import { Link } from '@/components/shared'
import { useRouter } from 'next/router'
import { User } from '../User'
import { Container, Links, MenuItem } from './styles'

const links = [
  {
    href: '/conta/seus-pedidos',
    text: 'Seus pedidos'
  },
  {
    href: '/conta/configuracoes',
    text: 'Configurações'
  },
  {
    href: '/conta/lista-de-desejos',
    text: 'Sua lista de desejos'
  }
]

export function AccountSidebar() {
  const { pathname } = useRouter()

  return (
    <Container>
      <User />
      <Links>
        {links.map((link) => (
          <Link
            key={link.text}
            href={link.href}
            as={MenuItem}
            className={`${pathname === link.href && 'active'}`}
          >
            {link.text}
          </Link>
        ))}
      </Links>
    </Container>
  )
}
