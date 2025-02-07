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
  const [tagsSelected, setTagsSelected] = useState([]);
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);

  function handleTagSelected(tagName) {

    if(tagName === "all"){
      return setTagsSelected([])
    }
    const alreadySelected = tagsSelected.includes(tagName);

    if (alreadySelected) {
      const filteredTags = tagsSelected.filter((tag) => tag !== tagName);
      setTagsSelected(filteredTags);
    } else {
      setTagsSelected((prevState) => [...prevState, tagName]);
    }
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags");
      setTags(response.data);
    }
    fetchTags();
  }, []);

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(
        `/notes?title=${search}&tags=${tagsSelected}`
      );
      setNotes(response.data);
    }

    fetchNotes();
  }, [tagsSelected, search]);

  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText
            title="Todos"
            isActive={tagsSelected.length === 0}
            onClick={() => handleTagSelected("all")}
          />
        </li>

        {tags &&
          tags.map((tag) => (
            <li key={tag.id}>
              <ButtonText
                title={tag.name}
                isActive={tagsSelected.includes(tag.name)}
                onClick={() => handleTagSelected(tag.name)}
              />
            </li>
          ))}
      </Menu>

      <Search>
        <Input
          placeholder="Pesquisar pelo título"
          icon={FiSearch}
          onChange={() => setSearch(e.target.value)}
        />
      </Search>

      <Content>
        <Section title="Minhas notas">
          {notes.map((note) => (
            <Note
              key={String(note.id)}
              data={note}
            />
          ))}
        </Section>
      </Content>

      <NewNote to="/New">
        <FiPlus /> Criar nota
      </NewNote>
    </Container>
  );
}
