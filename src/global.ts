import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
    lightGrayColorBackground:"#F7F7F7",
    mediumGrayColorBackground: "#F2F3F4",
    whiteColorBackground: "#FFFFFF",
    darkColorLetters: "#000000",
    lightColorLetters: "#6A737D",
    blueColorLetters: "#037DD6",
    grayBorderColor: "rgba(118, 118, 118, .3)"
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
        background-color: ${colors.lightGrayColorBackground};
    }
`
export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media(max-width: 1366px) {
        padding: 0 1.5rem;
    }

    @media(max-width: 999px) {
        padding: 0 1.2rem;
    }
`

export const Wrapper = styled.div`
    max-width: 1550px;
    width: 100%;
    min-height: 738px;
    height: auto;

    display: flex;
    flex-direction: column;
    gap: 0.12rem;

    margin-top: -2rem;

    @media(max-width: 1800px) {
        max-width: 1160px;
    }

    @media(max-width: 1366px) {
        max-width: 1050px;
    }

    @media(max-width: 999px) {
        max-width: 850px;
    }

    @media(max-width: 576px) {
        max-width: 700px;

    }
`

export const ContainerLisCoin = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;

    gap: .12rem;
`