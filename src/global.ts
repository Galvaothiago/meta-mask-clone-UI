import { createGlobalStyle } from 'styled-components'

export const colors = {
    grayColorBackground: "#F2F3F4",
    whiteColorBackground: "#FFFFFF",
    darkColorLetters: "#000000",
    lightColorLetters: "#6A737D",
    blueColorLetters: "#037DD6"
}

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Roboto', 'Ubuntu', sans-serif;
    }
    html {
        @media(max-width: 1080px) {
            font-size: 93.75%;
        }
        @media(max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body { 
        background-color: ${colors.grayColorBackground}
    }
`
