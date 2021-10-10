import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 2.4rem;
  right: 2.4rem;
  background-color: #128c7e;
  font-size: 3.2rem;
  color: var(--color-white);
  border-radius: 100%;
  border: 0;
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`
