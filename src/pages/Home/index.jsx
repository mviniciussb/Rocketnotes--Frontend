import { Container, Brand, Menu, Search, Content, NewNote } from "./style";
import { Header } from "../../components/header";
import { Section } from "../../components/section";
import { ButtonText } from "../../components/buttonText";
import { FiPlus, FiSearch } from "react-icons/fi";
import { Input } from "../../components/input";
import { Note } from "../../components/note";
import { useState, useEffect } from "react";
import { api } from "../../service/api";

export function Home() {
  const [tags, setTags] = useState("");

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags");
      setTags(response.data);
    }
    fetchTags();
  }, []);

  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText title="Todos" />
        </li>

        {tags &&
          tags.map((tag) => (
            <li key={tag.id}>
              <ButtonText title={tag.name} />
            </li>
          ))}
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
      </Search>

      <Content>
        <Section title="Minhas notas">
          <Note
            data={{
              title: "React Modal",
              tags: [{ id: "1", name: "React" }],
            }}
          />

          <Note
            data={{
              title: "Exemplo de Middleware",
              tags: [
                { id: "1", name: "Express" },
                { id: "2", name: "Node" },
              ],
            }}
          />
        </Section>
      </Content>

      <NewNote to="/New">
        <FiPlus /> Criar nota
      </NewNote>
    </Container>
  );
}
