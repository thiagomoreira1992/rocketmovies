import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`



    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        -webkit-font-smoothing: antialiased;
        height: 100%;
    }


    body, input, button, textarea{
        outline: none;
    }

    
    a{
        text-decoration: none;
    }

    button, a{
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover{
        filter: brightness(0.9);
    }

      /* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: ${({theme}) => theme.COLORS.ROSE};
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 8px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${({theme}) => theme.COLORS.ROSE};
    border-radius: 50px;
    border: 1px none #ffffff;
  }


`;
