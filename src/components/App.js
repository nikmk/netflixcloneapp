import React from 'react'
import { Global, css, jsx } from '@emotion/core'
import reactLogo from '../img/react.png'

/**
 * @function App
 */
const App = () => (
  <>
    <Global styles={GlobalCSS} />
  </>
)

const GlobalCSS = css`
  a {
    text-decoration: none;
  }

  ul {
    margin: 0;
    list-style: none;
    padding: 0;
  }
`

export default App
