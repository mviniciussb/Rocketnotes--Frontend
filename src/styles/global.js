import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body{
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        color: ${({ theme }) => theme.COLORS.WHITE};

        -webkit-font-smoothing: antialiased;

    }

    body, input, button, textarea{
        font-family: "Roboto Slab", serif;
        outline: none;
        font-size: 16px;
    }

    a{
        text-decoration: none;
    }

    button,a{
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover,a:hover{
        filter: brightness(0.9);
    }

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
        border-radius: 10px;
        border-left: 2px solid ${({ theme }) => theme.COLORS.GRAY_300};
        border-right: 2px solid ${({ theme }) => theme.COLORS.GRAY_300};


    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: ${({ theme }) => theme.COLORS.GRAY_500};
    }

    ::-webkit-scrollbar-track {
        background-color: ${({ theme }) => theme.COLORS.GRAY_300};
        border-radius: 10px;

    }

`