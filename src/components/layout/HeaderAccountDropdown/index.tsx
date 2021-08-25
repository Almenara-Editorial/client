import { Menu } from '@headlessui/react'

import { CaretDown } from '@/components/icons'
import { Hr, Popover } from '@/components/shared'

import { Container, Button, List, Link } from './styles'

type Link = {
  title: string
  url: string
  subtitle?: string
}

export type HeaderAccountDropdownProps = {
  links: Link[]
}

export const HeaderAccountDropdown = ({ links }: HeaderAccountDropdownProps) => {
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
              {({ active }) => (
                <li>
                  <Link className={`${active && 'bg-blue-500'}`} href="/account-settings">
                    {link.title}
                    {link.subtitle && <span>{link.subtitle}</span>}
                  </Link>
                </li>
              )}
            </Menu.Item>
          ))}
          <Hr space="md" />
          <Menu.Item>
            {({ active }) => (
              <li>
                <Link className={`${active && 'bg-blue-500'}`} href="#">
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
