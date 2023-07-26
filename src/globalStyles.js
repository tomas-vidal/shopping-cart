import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        scrollbar-gutter: stable; 
    }

    body {
    
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, Helvetica, Sans-Serif;
    }

    p {
      margin: 0;
    }
`;
 
export default GlobalStyle;