import { media } from '@/utils'
import styled from 'styled-components'
import { Wrapper } from '../Wrapper'

export const CmsContent = styled(Wrapper)`
  padding-block: 4.8rem;
  font-size: 1.6rem;
  line-height: 1.8;
  color: var(--color-neutral-800);

  ${media.lessThan('medium')`
    font-size: 1.4rem;
  `}

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--font-title);
    line-height: 1.4;
    margin-bottom: 0.5em;
    color: var(--color-text);
  }

  h1,
  h2 {
    font-size: var(--font-xl);
  }

  h3 {
    font-size: var(--font-lg);
  }

  h4 {
    font-size: var(--font-md);
  }

  h5 {
    font-size: var(--font-sm);
  }

  h6 {
    font-size: var(--font-xs);
  }

  p,
  ul,
  ol,
  table {
    margin-bottom: var(--space-lg);
  }

  figure,
  table {
    max-width: 100%;
    overflow-x: auto;
  }

  ul,
  ol,
  blockquote {
    list-style-position: inside;
    padding-left: 1.4rem;

    li ::marker {
      display: block;
      color: var(--color-neutral-200);
    }
  }

  ul,
  ol,
  table {
    font-size: 0.9em;
  }

  table,
  td,
  th {
    border: 1px solid var(--color-neutral-300);
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  td,
  th {
    padding: 0.2rem 0.8rem;
  }

  a {
    color: var(--color-primary-500);
    text-decoration: underline;
    font-weight: var(--body-bold);

    &:hover {
      color: var(--color-primary-400);
    }
  }

  blockquote {
    border-left: 2px solid var(--color-primary-500);
    color: var(--color-neutral-500);
  }

  hr {
    border: 0;
    height: 1px;
    background-color: var(--color-neutral-300);
    margin-block: 2.4rem;
  }
`
