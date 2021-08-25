import { Person } from '@/components/icons'
import { HeaderAccountDropdown } from '..'
import { Container } from './styles'

export type HeaderAccountProps = {
  fullName: string
}

export const HeaderAccount = ({ fullName }: HeaderAccountProps) => (
  <Container>
    <i>
      <Person />
    </i>
    <div>
      <span>Olá, {fullName}</span>
      <HeaderAccountDropdown
        links={[
          { title: 'Seus Pedidos', url: '/seus-pedidos' },
          { title: 'Configurações', subtitle: 'Dados de usuário, endereços, métodos de pagamentos.', url: '/minha-conta' }
        ]}
      />
    </div>
  </Container>
)
