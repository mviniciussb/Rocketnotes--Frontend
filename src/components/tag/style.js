import styled from "styled-components";

export const Container = styled.span`
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    font-size: 12px;

    background: ${({ theme }) => theme.COLORS.ORANGE};
    padding: 5px 14px;
    border-radius: 5px;

    margin-right: 6px;
`