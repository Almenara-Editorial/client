import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-primary-500);
  padding: var(--space-xl) var(--space-lg);
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 91.6rem;
  gap: var(--space-lg);
`

export const SuccessIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  font-size: 6.4rem;
  font-weight: var(--body-bold);
  color: var(--color-white);

  span {
    display: block;
    font-size: var(--font-md);
    text-align: center;
  }
`
