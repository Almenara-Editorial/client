import { CaretDown } from '@/components/icons'
import { DropdownModel } from '@/models'
import { Menu } from '@headlessui/react'
import { Container, Button, Popover, Item } from './styles'

type DropdownProps = Omit<DropdownModel, 'type'>

export function Dropdown({ title, links }: DropdownProps) {
  return (
    <Menu as={Container}>
      <Menu.Button as={Button}>
        {title}
        <i>
          <CaretDown />
        </i>
      </Menu.Button>
      <Menu.Items as={Popover}>
        {links?.map((link) => (
          <Menu.Item key={link.name}>
            {({ active }) => (
              <Item data-active={active} href={link.url}>
                {link.name}
              </Item>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  )
}
