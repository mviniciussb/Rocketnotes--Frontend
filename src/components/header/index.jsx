import { Container, Profile, Logout } from "./style.js";
import { RiShutDownLine } from "react-icons/ri";

export function Header() {
  return (
    <Container>
      <Profile>
        <img src="https://github.com/mviniciussb.png" alt="Foto do usuário" />

        <div>
          <span>Bem-vindo</span>
          <strong>Marcos Vinicius</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
