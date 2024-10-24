import { Container, Form, Background } from "./style";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { ButtonText } from "../../components/buttonText";
import { FiMail, FiLock } from "react-icons/fi";

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Faça seu login</h2>

        <Input type="text" icon={FiMail} placeholder="E-mail" />
        <Input type="password" icon={FiLock} placeholder="Senha" />
        <Button title="Entrar" />
        <ButtonText title="Criar conta" />
      </Form>
      <Background/>
    </Container>
  );
}
