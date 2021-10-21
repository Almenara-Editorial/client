import { MediaMatch } from '@/components/layout'
import { Button, Image } from '@/components/shared'
import { Background } from '../Background'
import { Container, Content, BooksImage, Text } from './styles'

export const HeroBanner = () => (
  <Container>
    <Background />
    <Content>
      <BooksImage>
        <MediaMatch greaterThan="medium">
          <Image
            src="/img/cartas-de-cristo-books.png"
            width="752"
            height="800"
          />
        </MediaMatch>
        <MediaMatch lessThan="medium">
          <Image
            src="/img/cartas-de-cristo-books-sm.png"
            width="657"
            height="517"
          />
        </MediaMatch>
      </BooksImage>
      <Text>
        <h1>
          Conheça a <span>verdadeira</span> natureza de <span>Deus</span>
        </h1>
        <p>
          Quem Jesus realmente era e o que ele ensinava? Qual é a verdadeira
          natureza de Deus?
        </p>
        <Button color="tertiary" size="rg-medium">
          COMPRAR AGORA
        </Button>
      </Text>
    </Content>
  </Container>
)
