import { TextField } from '@/components/form'
import { Link } from '@/components/shared'
import { ChangeEvent, FormEvent, useState } from 'react'
import { Logo, HeaderActions, HeaderLinks } from '..'
import { Container, Wrapper } from './styles'
import { useRouter } from 'next/dist/client/router'
import { HeaderModel } from '@/models'

type HeaderProps = {
  header: HeaderModel
}

export const Header = ({ header }: HeaderProps) => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState('')

  function onSubmitSearch(e: FormEvent) {
    e.preventDefault()
    router.push(`/produtos?s=${searchTerm}`)
  }

  function handleChangeSearchField(e: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value)
  }

  return (
    <Container>
      <Wrapper>
        <div className="logo">
          <Link href="/" as="a">
            <Logo />
          </Link>
        </div>
        <form onSubmit={onSubmitSearch}>
          <TextField
            type="search"
            placeholder="O que você está procurando?"
            onChange={handleChangeSearchField}
            value={searchTerm}
          />
        </form>
        <HeaderActions />
      </Wrapper>
      <HeaderLinks links={header?.links} />
    </Container>
  )
}
export default Header
