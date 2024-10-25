import { Container, Form, Background } from "./style";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { ButtonText } from "../../components/buttonText";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";


export function SignUp() {
  return (
    <Container>
      <Background />
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Crie sua conta</h2>
        <Input type="text" icon={FiUser} placeholder="Nome" />
        <Input type="text" icon={FiMail} placeholder="E-mail" />
        <Input type="password" icon={FiLock} placeholder="Senha" />
        <Button title="Cadastrar" />
        <Link to="/">Voltar para o login</Link>
      </Form>
    </Container>
  );
}
