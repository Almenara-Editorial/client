import styled from 'styled-components'

export const SectionTitle = styled.div`
  display: flex;
  align-items: center;

  font-family: var(--font-title);
  font-size: 3.2rem;
  font-weight: var(--title-regular);
  text-align: center;
  white-space: nowrap;

  &:before,
  &:after {
    content: '';
    width: 100%;
    height: 1px;
    background-color: var(--color-neutral-200);
  }

  &:before {
    margin-right: var(--space-xl);
  }

  &:after {
    margin-left: var(--space-xl);
  }
`
