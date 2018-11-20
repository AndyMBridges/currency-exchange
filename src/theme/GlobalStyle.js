import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
    }

    body {
        background: #FFF;
        margin: 0;
        padding: 0;
        font-family: Helvetica Neue,Helvetica,Arial,sans-serif; 
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #000;

        h1, h2 {
            margin: 0 auto 1rem auto;
            color: #000;
            text-align: center;
            text-transform: uppercase;
        }

        h2 {
            margin: 1rem 0 0;
        }

        .main {
            text-align: center;
        }
    }`
;

export const Title = styled.h1`
    text-align:center;
    color: #000;
    margin-bottom: 1rem;
    text-transform: uppercase;
    border-bottom: 1px solid #eb008d;
    padding-bottom: 1rem;
`;

export const Image = styled.img`
    margin: 0 auto;
    width: 100%;
`;

export const ContentWrap = styled.div`
    display: grid;
    grid-template-columns: 100%;

    @media (min-width: 768px) {
        grid-template-columns: 50% 50%;
    }
    @media (min-width: 1024px) {
        grid-template-columns: 33% 33% 33%;
    }
`;

export const ContentItem = styled.div`
    background-color: #FFF;
    border-radius: 3px; 
    display: grid;
    padding: 1rem;
    text-align: center;
    max-width: 100%;
    margin: 1rem 0;
    @media (min-width: 768px) {
        margin: 1rem;
    }
`;
