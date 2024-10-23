import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 105px 128px auto 64px;
    grid-template-areas: 
    "brand header"
    "menu search"
    "menu content"
    "newnote content";
  
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Brand = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    border-bottom: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    >h1{
        color: ${({ theme }) => theme.COLORS.ORANGE};
        font-size: 24px;
    }
`

export const Menu = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 24px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    text-align: center;
    padding: 64px 0;
    height: 85vh;
`

export const Search = styled.div`
    padding: 24px 64px;
`

export const Content = styled.div`
    grid-area: content;
    padding: 64px 64px 0;
`

export const NewNote = styled.button`
    grid-area: newnote;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    font-size: 20px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;

    >svg{
        margin-right: 8px;
    }
`