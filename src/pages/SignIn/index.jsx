import { Container, Form, Background } from "./style";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth.jsx";

export function SignIn() {
  const data = useAuth();
  console.log("Meu contexto -> ", data);

  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Faça seu login</h2>

        <Input type="text" icon={FiMail} placeholder="E-mail" />
        <Input type="password" icon={FiLock} placeholder="Senha" />
        <Button title="Entrar" />

        <Link to="/register">Criar conta</Link>
      </Form>

      <Background />
    </Container>
  );
}

//
