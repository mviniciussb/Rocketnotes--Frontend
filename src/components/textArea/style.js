import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 150px;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.WHITE};

    word-wrap: break-word;
    white-space: normal;

    resize: none;
    margin-bottom: 8px;
    border-radius: 10px;
    padding: 16px;
    border: none;

    &::placeholder{
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
`