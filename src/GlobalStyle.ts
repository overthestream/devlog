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
    font-family: "Inter", "Noto Sans KR", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    font-family: 'Fira Code', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    scrollbar-width: none;
  }

  textarea, button, button:active {
    resize: none;
    outline: none;
    border: none;

    font-family: "Inter", "Noto Sans KR", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
  }

  a, a:visited {
    color: inherit;
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
    color: #f1f3f5;
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
