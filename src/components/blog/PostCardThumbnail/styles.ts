import styled from 'styled-components'
import { Container as PostCard } from '../PostCard/styles'

export const Container = styled.div`
  position: relative;
  padding-top: 57%;
  margin-bottom: 1.6rem;
  border-radius: 0.2rem;
  overflow: hidden;

  img {
    transition: all 0.1s;
  }

  ${PostCard}:hover & {
    img {
      transform: scale(1.1);
    }
  }
`
