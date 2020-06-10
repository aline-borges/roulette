import React from 'react'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    overflow-x: hidden;
  }

  ul {
    list-style: none;
  }
`;

const Global = () => {
  return(
    <React.Fragment>
     <GlobalStyle />
    </React.Fragment>
  )
}

export default Global;