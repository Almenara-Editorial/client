import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  :root{
    --color-secondary-100: rgba(229,236,255,1);
    --color-secondary-200: rgba(178,198,255,1);
    --color-secondary-300: rgba(102,140,255,1);
    --color-secondary-400: rgba(51,102,255,1);
    --color-secondary-500: rgba(0,55,219,1);
    --color-secondary-600: rgba(0,42,168,1);
    --color-secondary-700: rgba(0,29,117,1);
    --color-neutral-50: rgba(244,245,245,1);
    --color-neutral-100: rgba(234,234,236,1);
    --color-neutral-200: rgba(210,211,213,1);
    --color-neutral-300: rgba(168,170,173,1);
    --color-neutral-400: rgba(145,146,151,1);
    --color-neutral-500: rgba(124,126,131,1);
    --color-neutral-600: rgba(102,104,112,1);
    --color-neutral-700: rgba(81,84,92,1);
    --color-neutral-800: rgba(58,61,69,1);
    --color-neutral-900: rgba(22,24,29,1);
    --color-primary-50: rgba(255,246,229,1);
    --color-primary-100: rgba(254,236,200,1);
    --color-primary-200: rgba(255,204,102,1);
    --color-primary-300: rgba(255,187,51,1);
    --color-primary-400: rgba(255,178,26,1);
    --color-primary-500: rgba(255,170,0,1);
    --color-primary-600: rgba(229,153,0,1);
    --color-primary-700: rgba(204,136,0,1);
    --color-primary-800: rgba(178,119,0,1);
    --color-primary-900: rgba(153,102,0,1);
    --color-tertiary-500: rgba(255,89,100,1);
  }
`

export default GlobalStyles
