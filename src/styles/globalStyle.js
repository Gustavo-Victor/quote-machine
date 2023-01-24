import { createGlobalStyle } from "styled-components";
// import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0; 
        box-sizing: border-box; 
    }
    
    body {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${({ theme }) => theme.color};
        color: ${({ theme }) => theme.color};
        font-weight: 400;
        font-family: 'Raleway', sans-serif;
        transition: background-color 0.4s ease-in; 
        overflow: hidden;

        
        
        #wrapper { 
            width: 90%;
            max-width: 550px; 
            height: auto; 
            position: relative;
            z-index: 2;
        }
    
        a {
            text-decoration: none;
        }
    
        button {
            outline: none;
            border: none;
            cursor: pointer;
        }
    }
`;
