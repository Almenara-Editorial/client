import { Link } from '@/components/shared'
import { useEffect, useState } from 'react'
import { Logo, HeaderLinks, MediaMatch } from '..'
import { Container, Wrapper } from './styles'
import { HeaderModel } from '@/models'
import { useDebounce } from '@/hooks'
import { Menu } from '../Menu'
import { SearchForm } from '../SearchForm'
import { HeaderActions } from '../HeaderActions'

type HeaderProps = {
  header: HeaderModel
}

export const Header = ({ header }: HeaderProps) => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const lastScrollPosition = useDebounce(scrollPosition, 500)

  function handleScroll() {
    setScrollPosition(() => {
      return document.body.getBoundingClientRect().top
    })
  }

  useEffect(() => {
    document.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    console.log(
      lastScrollPosition >= scrollPosition ||
        (scrollPosition > 0 && scrollPosition === lastScrollPosition)
    )
  }, [lastScrollPosition, scrollPosition])

  return (
    <Container>
      <Wrapper>
        <div className="logo">
          <Link href="/" as="a">
            <Logo />
          </Link>
        </div>
        <MediaMatch greaterThan="medium">
          <div className="links">
            <SearchForm />
            <HeaderActions />
          </div>
        </MediaMatch>
        <MediaMatch lessThan="medium">
          <Menu links={header.links} />
        </MediaMatch>
      </Wrapper>
      <HeaderLinks links={header?.links} />
    </Container>
  )
}
export default Header
