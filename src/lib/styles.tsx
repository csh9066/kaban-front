import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
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

export const BoardTileColumnStyle = css`
  width: 25%;
  padding: 8px;

  @media (max-width: 768px) {
    width: 50%;
  }
`;

export const BoardTileStyle = css`
  position: relative;
  height: 100px;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
`;
