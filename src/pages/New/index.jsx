import { Container, Main, Form } from "./style.js";
import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { Section } from "../../components/section";
import { Button } from "../../components/button";
import { TextArea } from "../../components/textArea";
import { NoteItem } from "../../components/noteItem";
import { Link } from "react-router-dom";

export function New() {
  return (
    <Container>
      <Header />

      <Main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">Voltar</Link>
          </header>

          <Input placeholder="Título" type="text" />
          <TextArea placeholder="Observações" />

          <Section title="Links úteis">
            <NoteItem value="https://rocketseat.com.br" />
            <NoteItem value="" isNew placeholder="Novo link" />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="React" />
              <NoteItem value="" isNew placeholder="Novo marcador" />
            </div>
          </Section>

          <Button title="Salvar" />
        </Form>
      </Main>
    </Container>
  );
}
