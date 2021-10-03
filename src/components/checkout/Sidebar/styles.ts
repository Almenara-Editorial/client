import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  height: 100%;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: calc(54.8rem - 6.4rem);
  padding-block: 4.8rem;
  z-index: var(--layer-sidebar);
  background: var(--color-white);
  box-shadow: 0px 4px 40px -20px #b3c6ff;
`

export const Title = styled.h2`
  font-size: 2.4rem;
  padding-inline: 5.6rem;
  margin-bottom: 2.4rem;
  font-family: var(--font-title);
`
export const OrderDetails = styled.div`
  padding-inline: 5.6rem;
  color: var(--color-neutral-500);
  margin-bottom: 3.2rem;
`

export const Row = styled.div`
  display: flex;
  gap: 3.2rem;
  justify-content: space-between;

  font-size: var(--font-sm);

  & + & {
    margin-top: 1.8rem;
  }
`
