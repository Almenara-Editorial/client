import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  font-size: var(--font-sm);
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  background: none;
  border: 0;

  font-weight: var(--body-bold);

  cursor: pointer;

  > i {
    font-size: 1.2rem;
    line-height: 0;
  }
`

export const List = styled.ul`
  min-width: 32rem;
  list-style: none;
  font-size: var(--body-sm);
  padding: 1.2rem;
`

export const Link = styled.a`
  display: block;
  text-decoration: none;
  padding: 1.2rem;
  color: var(--color-text);
  border-radius: var(--radius-sm);
  border: 0;
  background: none;
  width: 100%;
  cursor: pointer;
  text-align: left;

  &:hover {
    background-color: var(--color-neutral-50);
  }

  span {
    display: block;
    margin-top: 0.8rem;
    color: var(--color-neutral-300);
  }
`
