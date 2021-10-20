import { Button } from '@/components/shared'
import { BookCard } from '../BookCard'
import { Container, Wrapper, Description, Books } from './styles'

export const BooksDescription = () => (
  <Container>
    <Wrapper>
      <Description>
        <h2>Conteúdo completo em 2 Livros:</h2>
        <p>
          Tortor, eget ullamcorper sit tristique libero bibendum adipiscing
          vitae mauris id aliquam convallis ultricies non etiam elit euismod sit
          sed vestibulum, amet pellentesque purus eu
        </p>
        <Button color="tertiary" size="rg-medium" outline>
          COMPRAR AGORA
        </Button>
      </Description>
      <Books>
        <BookCard
          image="/img/consciencia-cristica.png"
          description="<strong>”A Consciência Crística Manifestada”</strong> é a tradução do original inglês Christ Returns-Speaks His Truth."
        />
        <BookCard
          image="/img/textos-complementares.png"
          description="<strong>”Textos complementares”</strong> apresenta as mensagens recebidas por este canal nos anos seguintes às nove Cartas."
        />
      </Books>
    </Wrapper>
  </Container>
)
