import { Menu } from '@headlessui/react'

import { CaretDown } from '@/components/icons'
import { Hr, Popover, Link as DefaultLink } from '@/components/shared'

import { Container, Button, List, Link } from './styles'
import { signOut } from 'next-auth/client'

type Link = {
  title: string
  url: string
  subtitle?: string
}

export type HeaderAccountDropdownProps = {
  links: Link[]
}

export const HeaderAccountDropdown = ({
  links
}: HeaderAccountDropdownProps) => {
  return (
    <Menu as={Container}>
      <Menu.Button as={Button}>
        Conta
        <i>
          <CaretDown />
        </i>
      </Menu.Button>
      <Menu.Items as={Popover}>
        <List>
          {links?.map((link) => (
            <Menu.Item key={link.url}>
              {() => (
                <li>
                  <DefaultLink as={Link} href="/conta/seus-pedidos">
                    {link.title}
                    {link.subtitle && <span>{link.subtitle}</span>}
                  </DefaultLink>
                </li>
              )}
            </Menu.Item>
          ))}
          <Hr space="md" />
          <Menu.Item>
            {() => (
              <li>
                <Link as="button" onClick={() => signOut()}>
                  Sair
                </Link>
              </li>
            )}
          </Menu.Item>
        </List>
      </Menu.Items>
    </Menu>
  )
}
