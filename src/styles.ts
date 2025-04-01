import { createGlobalStyle } from 'styled-components'

const cores = {
  white: '#EEE',
  black: '#111',
  gray: '#333',
  green: '#10AC84'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    color: ${cores.white};
  }

  body {
    background-color: ${cores.black};
  }
`
