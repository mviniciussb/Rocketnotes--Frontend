import { Container, Main, Form } from "./style.js";
import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { Section } from "../../components/section";
import { Button } from "../../components/button";
import { TextArea } from "../../components/textArea";
import { NoteItem } from "../../components/noteItem";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../service/api.js";

export function New() {
  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  function handleAddLink() {
    if (newLink.trim() === "") return;
    setLinks((prevState) => [...prevState, newLink]);
    setNewLink("");
  }

  function handleRemoveLink(deleted) {
    setLinks((prevState) => prevState.filter((link) => link !== deleted));
  }

  function handleAtTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleNewNote() {
    if (!title) {
      return alert("Você deixou a nota sem título.");
    }

    if (newLink) {
      return alert(
        "Você deixou um link no campo para adicionar, mas não clicou em adicionar."
      );
    }

    if (newTag) {
      return alert(
        "Você deixou uma tag no campo para adicionar, mas não clicou em adicionar."
      );
    }

    await api.post("/notes", {
      title,
      description,
      tags,
      links,
    });

    alert("Nota criada com sucesso!");
    navigate("/");
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

          <Input
            placeholder="Título"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextArea
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}
          />

          <Section title="Links úteis">
            {links.map((link, index) => (
              <NoteItem
                key={String(index)}
                value={link}
                onClick={() => handleRemoveLink(link)}
              />
            ))}
            <NoteItem
              value={newLink}
              isNew
              placeholder="Novo link"
              onChange={(e) => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              {tags.map((tag, index) => (
                <NoteItem
                  value={tag}
                  key={String(index)}
                  onClick={() => {
                    handleRemoveTag(tag);
                  }}
                />
              ))}
              <NoteItem
                value={newTag}
                isNew
                placeholder="Novo marcador"
                onChange={(e) => setNewTag(e.target.value)}
                onClick={handleAtTag}
              />
            </div>
          </Section>

          <Button title="Salvar" onClick={handleNewNote} />
        </Form>
      </Main>
    </Container>
  );
}
