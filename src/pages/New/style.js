import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    display: grid;
    grid-template-rows: 105 1fr;
    grid-template-areas: "header" "content";

    .tags{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
`

export const Main = styled.main`
    overflow-y: auto;
    grid-area: content;
`

export const Form = styled.form`
        max-width: 550px;
        margin:  38px auto;

        header{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 36px;

        a{
            color: ${({ theme }) => theme.COLORS.GRAY_100};
            font-size: 20px;

        }    


        }


        > div {
            margin: 36px 0 16px;
        }
`