import { Container, Main, Form } from "./style.js";
import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { Section } from "../../components/section";
import { Button } from "../../components/button";
import { TextArea } from "../../components/textArea";

export function New() {
  return (
    <Container>
      <Header />

      <Main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <a href="/">Voltar</a>
          </header>

          <Input placeholder="Título" type="text" />
          <TextArea placeholder="Observações" />

          <Section title="Links úteis"></Section>

          <Section title="Marcadores"></Section>

          <Button title="Salvar" />
        </Form>
      </Main>
    </Container>
  );
}
