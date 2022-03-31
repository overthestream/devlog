import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  html {
    font-size: 16px;
    height: 100%;
  }

  body {
    min-height: 100%;
    background: #0d1b2d;
    margin: 0;
    padding: 0;
    font-family: 'Fira Code',"Noto Sans KR", monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    scrollbar-width: none;
  }

  textarea, button, button:active {
    resize: none;
    outline: none;
    border: none;

    font-family: "Noto Sans KR", 'Fira Code', monospace;
  }

  a, a:visited {
    text-decoration: none;
  }

  input, textarea {
    border: none;

    :focus {
      outline: none;
    }
  }

  * { 
    box-sizing: border-box;
    margin: 0;

    ::selection {
      background: #343a40;
      color: #f1f3f5;
    }
  }

  #root {
    overflow-y: auto;
  }
`;

export default GlobalStyle;
