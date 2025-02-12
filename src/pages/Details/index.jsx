import { Container, Links, Content } from "./style";
import { Header } from "../../components/header";
import { Button } from "../../components/button";
import { Section } from "../../components/section";
import { Tag } from "../../components/tag";
import { ButtonText } from "../../components/buttonText";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../service/api";

export function Details() {
  const [data, setData] = useState(null);

  const params = useParams();
  const navigate = useNavigate()

  function handleBack(){
    navigate("/")
  }

  async function handleRemove(){
    const confirm = window.confirm("Deseja realmente remover a nota?")

    if(confirm){
      await api.delete(`/notes/${params.id}`)
      navigate("/")
    }
  }

  useEffect(() => {
    console.log("ID recebido:", params.id);

    async function fetchNote() {
      try {
        const response = await api.get(`/notes/${params.id}`);
        console.log("Dados recebidos:", response.data);
        setData(response.data);
      } catch (error) {
        console.error("Erro ao buscar a nota:", error);
      }
    }

    fetchNote();
  }, [params.id]);

  return (
    <Container>
      <Header />

      {data && (
        <main>
          <Content>
            <ButtonText title="Excluir a nota" onClick={handleRemove} />
            <h1>{data.title}</h1>
            <p>{data.description}</p>

            {data.links && (
              <Section title="Links uteis">
                <Links>
                  {data.links.map((link) => (
                    <li key={String(link.id)}>
                      <a href={link.url} target="_blank">
                        {link.url}
                      </a>
                    </li>
                  ))}
                </Links>
              </Section>
            )}

            {data.tags && (
              <Section title="Marcadores">
                {data.tags.map((tag) => (
                  <Tag key={String(tag.id)} title={tag.name} />
                ))}
              </Section>
            )}
            <Button title="Voltar" onClick={handleBack} />
          </Content>
        </main>
      )}
    </Container>
  );
}
