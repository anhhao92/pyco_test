import { createGlobalStyle } from 'styled-components'
import 'antd/dist/antd.css'

export const theme = {
  colors: {
    primary: '#0070f3',
    white: '#ffffff',
  },
}

export const GlobalStyle = createGlobalStyle`
  #__next {
    height: 100%;
  }
`
