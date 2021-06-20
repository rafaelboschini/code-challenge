import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  * {
    font-family: verdana;
    box-sizing: border-box;
  }
  html{
    font-size: 100%;
  }
  body {
    margin: 0;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
  
  .only-mobile{
    display:none;
  }

  @media(max-width: 768px) {
    .hide-mobile {
      display:none !important;
    }

    .only-mobile {
      display:inherit !important;
    }
  }
  `