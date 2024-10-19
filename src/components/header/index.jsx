import { Container, Profile } from "./style.js";

export function Header(){
    return (
    
    <Container>

        <Profile>
            <img src="https://github.com/mviniciussb.png" alt="Foto do usuário" />

            <div>
                <span>Bem-vindo</span>
                <strong>Marcos Vinicius</strong>
            </div>
        </Profile>

    </Container>

    )
}