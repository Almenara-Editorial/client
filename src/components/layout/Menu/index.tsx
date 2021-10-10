import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { CloseButton, Link } from '@/components/shared'
import { MenuButton, Logo } from '@/components/layout'
import { HeaderModel } from '@/models'
import { Container, Wrapper, Anchor } from './styles'
import { SearchForm } from '../SearchForm'

type MenuProps = {
  links: HeaderModel['links']
}

export const Menu = ({ links }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <MenuButton onClick={() => setIsOpen(true)} />
      <Dialog
        open={isOpen}
        static
        onClose={() => setIsOpen(false)}
        as={Container}
        data-is-open={isOpen}
      >
        <CloseButton aria-label="Fechar" onClick={() => setIsOpen(false)} />
        <Wrapper>
          <div className="logo">
            <i>
              <Logo />
            </i>
          </div>
          <SearchForm />
          <ul>
            {links?.map((link) => (
              <li key={link.name}>
                <Link href={link.url} as={Anchor}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </Wrapper>
      </Dialog>
    </>
  )
}
