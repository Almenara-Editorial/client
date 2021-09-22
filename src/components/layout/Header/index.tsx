import { TextField } from '@/components/form'
import { Link } from '@/components/shared'
import { ChangeEvent, FormEvent, useState } from 'react'
import { HeaderActions } from '../HeaderActions'
import { Logo } from '..'
import { Container, Wrapper } from './styles'
import { useRouter } from 'next/dist/client/router'

export const Header = () => {
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
        <div>
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
    </Container>
  )
}
export default Header
