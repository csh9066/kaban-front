import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;    
  }
  body {
    font-family: 'Noto Sans KR', sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  body, button, html, input, select, textarea {
    font-family: 'Noto Sans KR', sans-serif;
  }
`;
