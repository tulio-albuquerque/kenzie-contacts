import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  *, 
  *:after,
  *:before {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      text-decoration: none;
  }
  body{
      font-size: 100%;
      list-style-type: none;
  }

  :root {
    font-size: 60%
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%
    }
  }
`