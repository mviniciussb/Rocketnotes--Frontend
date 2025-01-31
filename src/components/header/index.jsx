import { Container, Profile, Logout } from "./style.js";
import { RiShutDownLine } from "react-icons/ri";
import {useAuth} from "../../hooks/auth.jsx"

export function Header() {
  const {signOut} = useAuth()

  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/mviniciussb.png" alt="Foto do usuário" />

        <div>
          <span>Bem-vindo</span>
          <strong>Marcos Vinicius</strong>
        </div>
      </Profile>

      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
