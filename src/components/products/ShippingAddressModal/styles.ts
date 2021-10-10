import styled from 'styled-components'

export const Container = styled.div`
  max-width: 40rem;
`

export const Header = styled.header`
  display: block;
  padding: 1.6rem 2.4rem;
  border-bottom: 1px solid var(--color-neutral-200);

  font-weight: var(--body-bold);
  font-size: var(--font-rg);
  text-align: center;
`

export const Form = styled.form`
  padding: 2.4rem;
`
export const FieldRow = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-rg);
`
export const Separator = styled.div`
  display: flex;
  align-items: center;
  margin-block: 2.4rem;

  text-align: center;
  font-size: 1.4rem;
  color: var(--color-neutral-200);

  span {
    padding-inline: 1.6rem;
  }

  &:before,
  &:after {
    content: '';
    width: 100%;
    height: 1px;
    background-color: currentColor;
  }
`
