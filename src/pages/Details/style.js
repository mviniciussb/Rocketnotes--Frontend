import styled from "styled-components"

export const Container = styled.div`
    display: grid;

    width: 100%;
    height: 100vh;

    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content"
    ;

    > main{
        grid-area: content;
        overflow-y: auto;
        padding: 32px 0 64px;
    }
`

export const Links = styled.ul`
    list-style: none;

    > li{
        margin-top: 12px;

        a{
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }
`

export const Content = styled.div`
    max-width: 550px;
    margin: auto;

    display: flex;
    flex-direction: column;

    >button:first-child{
        align-self: end;
    }

    >h1{
        font-size: 36px;
        font-weight: 500;
        padding-top: 24px;
    }

    >p{
        font-size: 16px;
        margin-top: 16px;
        text-align: justify;
        white-space: pre-wrap;
        word-wrap: break-word;
    }
`