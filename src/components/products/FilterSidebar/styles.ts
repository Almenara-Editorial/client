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
  left: 0;
  top: 50%;
  border-radius: 0 0.2rem 0.2rem 0;
  transform: translateY(-50%);
  background: none;
  border: 0;
  font-size: 3rem;
  z-index: var(--layer-modal);
  color: var(--color-white);
  background-color: var(--color-primary-500);
  padding: 1rem;
  line-height: 0;
  cursor: pointer;
`

export const FilterModal = styled.div`
  padding: 2rem;
`
