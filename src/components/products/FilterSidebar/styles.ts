import styled from 'styled-components'

export const Container = styled.div`
  position: sticky;
  top: 13.5rem;

  display: flex;
  align-self: flex-start;
  flex-direction: column;
  gap: 3.2rem;

  flex: 1 0 28rem;
  padding: 0 2.4rem;
`

export const FilterButton = styled.button`
  position: fixed;
  left: 2rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: 0;
`
