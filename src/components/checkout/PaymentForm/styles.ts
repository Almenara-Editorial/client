import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`

export const Item = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 2.4rem;

  img {
    width: 3rem;
    height: 3rem;
    object-fit: contain;
  }
`

export const Thumbs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
`
