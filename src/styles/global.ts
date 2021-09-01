import { colors } from './colors'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''),
        url('/fonts/roboto-slab-v13-latin-regular.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local(''),
        url('/fonts/roboto-slab-v13-latin-600.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''),
        url('/fonts/noto-sans-v14-latin-regular.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local(''),
        url('/fonts/noto-sans-v14-latin-700.woff2') format('woff2');
  }

  :root{
    --grid-container:  124rem;
    --grid-gutter: 3.2rem;

    --radius-sm: 0.2rem;
    --radius-md: 0.4rem;
    --radius-lg: 0.8rem;

    --space-xs: 1.2rem;
    --space-sm: 1.4rem;
    --space-rg: 1.6rem;
    --space-md: 1.8rem;
    --space-lg: 2.4rem;
    --space-xl: 3.2rem;
    --space-2xl: 4rem;
    --space-3xl: 4.8rem;

    --layer-base: 10;
    --layer-header: 30;
    --layer-overlay: 20;
    --layer-modal: 40;
    --layer-top: 50;

    --font-title: "Roboto Slab", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --font-body: "Noto Sans", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    --font-xs: 1.2rem;
    --font-sm: 1.4rem;
    --font-rg: 1.6rem;
    --font-lg: 2.4rem;
    --font-xl: 3.2rem;
    --font-2xl: 4rem;
    --font-3xl: 4.8rem;
    --title-light: 400;
    --title-regular: 600;
    --body-regular: 400;
    --body-bold: 700;

    --color-primary-100: ${colors['blue-100']};
    --color-primary-200: ${colors['blue-200']};
    --color-primary-400: ${colors['blue-400']};
    --color-primary-300: ${colors['blue-300']};
    --color-primary-500: ${colors['blue-500']};
    --color-primary-600: ${colors['blue-600']};
    --color-primary-700: ${colors['blue-700']};
    --color-neutral-50: ${colors['neutral-50']};
    --color-neutral-100: ${colors['neutral-100']};
    --color-neutral-200: ${colors['neutral-200']};
    --color-neutral-300: ${colors['neutral-300']};
    --color-neutral-400: ${colors['neutral-400']};
    --color-neutral-500: ${colors['neutral-500']};
    --color-neutral-600: ${colors['neutral-600']};
    --color-neutral-700: ${colors['neutral-700']};
    --color-neutral-800: ${colors['neutral-800']};
    --color-neutral-900: ${colors['neutral-900']};
    --color-secondary-50: ${colors['yellow-50']};
    --color-secondary-100: ${colors['yellow-100']};
    --color-secondary-200: ${colors['yellow-200']};
    --color-secondary-300: ${colors['yellow-300']};
    --color-secondary-400: ${colors['yellow-400']};
    --color-secondary-500: ${colors['yellow-500']};
    --color-secondary-600: ${colors['yellow-600']};
    --color-secondary-700: ${colors['yellow-700']};
    --color-secondary-800: ${colors['yellow-800']};
    --color-secondary-900: ${colors['yellow-900']};
    --color-tertiary-500: ${colors['red-500']};
    --color-tertiary-400: ${colors['red-400']};
    --color-success-300: ${colors['success-300']};
    --color-danger-300: ${colors['danger']};
    --color-white: ${colors.white};
    --color-background: ${colors.background};
    --color-text: ${colors['neutral-900']};

    --input-border-color: var(--color-neutral-200);
    --input-disabled-background: var(--color-neutral-100);
    --input-focus-border-color: var(--color-primary-500);
    --input-padding-x: var(--space-md);
    --input-label-color: var(--color-neutral-300);
    --input-height: 5.1rem;
    --input-border-radius: var(--radius-md);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-size: 1.6rem;
    font-family: "Noto Sans", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--color-text);
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`

export default GlobalStyles
