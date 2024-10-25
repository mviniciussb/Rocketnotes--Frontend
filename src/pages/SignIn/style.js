import styled from "styled-components";
import backgroundImage from "../../assets/background.png"

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;

    
    
`

export const Form = styled.form`

        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;

        padding: 0 136px;

        h1{
            color: ${({ theme }) => theme.COLORS.ORANGE};
            font-size: 48px;
        }

        p{
            color: ${({ theme }) => theme.COLORS.GRAY_100};
            font-size: 14px;
        }

        h2{
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-size: 24px;
            font-weight: 500;

            margin: 48px 0 24px;
        }

        a{
            color: ${({theme}) => theme.COLORS.ORANGE};
            margin-top: 124px;
        }
`
export const Background = styled.div`
    flex: 1;
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    backdrop-filter: grayscale(30%);

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(35, 33, 41, 0.80);
}
`