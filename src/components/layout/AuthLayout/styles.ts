import { Wrapper } from '@/components/shared'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  position: relative;
  left: 0;

  min-height: calc(100vh - var(--header-height));
`

export const Content = styled(Wrapper).attrs({ as: 'section' })`
  min-height: 100%;

  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1 0 100%;
    height: fit-content;
    width: 100%;
    max-width: 59.2rem;
    padding-inline: 3.2rem;
    margin-left: auto;
  }
`

export const FormContainer = styled.div`
  width: 100%;
  max-width: 42.4rem;
`

export const Banner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: calc(50vw - 3.2rem);
  background: gray;
`
export const Title = styled.h2`
  margin-bottom: 2.4rem;
  font-family: var(--font-title);
  font-size: var(--font-xl);
  font-weight: var(--title-bold);
`

export const Subtitle = styled.h3`
  margin-bottom: 3.2rem;
`
