import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    *, input , button {
        font-family: 'Roboto', sans-serif;
    }
    .main-theme {
        width: 100%;
        height: 100vh;
        background: linear-gradient(303deg, rgba(78,0,130,1) 0%, rgba(9,54,121,1) 48%, rgba(0,146,255,1) 100%);
        padding-top: 50px;
    }
`;