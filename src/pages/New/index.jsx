import { Container, Main, Form } from "./style.js";
import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { Section } from "../../components/section";
import { Button } from "../../components/button";
import { TextArea } from "../../components/textArea";
import { NoteItem } from "../../components/noteItem";
import { Link } from "react-router-dom";
import { useState } from "react";

export function New() {
  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  function handleAddLink() {
    if (newLink.trim() === "") return;
    setLinks(prevState => [...prevState, newLink]);
    setNewLink("");
  }

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
            {
              links.map((link, index) => (
                <NoteItem key={String(index)} value={link} onClick={() => {}} />
              ))
            }
            <NoteItem 
              value={newLink} 
              isNew 
              placeholder="Novo link" 
              onChange={e => setNewLink(e.target.value)} 
              onClick={handleAddLink} 
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="React" />
              <NoteItem 
                value="" 
                isNew 
                placeholder="Novo marcador"
                onChange={e => console.log(e.target.value)}
              />
            </div>
          </Section>

          <Button title="Salvar" />
        </Form>
      </Main>
    </Container>
  );
}
