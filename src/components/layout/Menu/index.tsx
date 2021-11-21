import { useEffect, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { CloseButton, Link } from '@/components/shared'
import { MenuButton, Logo } from '@/components/layout'
import { HeaderModel } from '@/models'
import { Container, Wrapper, Anchor } from './styles'
import { SearchForm } from '../SearchForm'
import { HeaderAccount } from '../HeaderAccount'
import { useRouter } from 'next/router'

type MenuProps = {
  links: HeaderModel['body']
}

export const Menu = ({ links }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const { asPath } = useRouter()

  useEffect(() => {
    setIsOpen(false)
  }, [asPath])

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
          <HeaderAccount withoutDropdown />
          <ul>
            {links?.map((link) =>
              link.type !== 'dropdown' ? (
                <li key={link.name}>
                  <Link href={link.url} as={Anchor}>
                    {link.name}
                  </Link>
                </li>
              ) : (
                <li key={link.title}>
                  <Link href={link.title} as={Anchor}>
                    {link.title}
                  </Link>
                </li>
              )
            )}
          </ul>
        </Wrapper>
      </Dialog>
    </>
  )
}
