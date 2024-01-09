import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    overflow: hidden;
    box-sizing: border-box;
    font-family: 'Raleway', 'sans-serif'
  }

  html, body, #root {
    width: 100%;
    height: 100vh;
  }

`
