import { Container, Links } from "./style";
import { Header } from "../../components/header";
import { Button } from "../../components/button";
import { Section } from "../../components/section";
import { Tag } from "../../components/tag";

export function Details() {
  return (
    <Container>
      <Header />
      <Section title="Links uteis">
        <Links>
          <li>
            <a href="#">https://www.rocketseat.com.br/</a>
          </li>
          <li>
            <a href="#">https://www.rocketseat.com.br/</a>
          </li>
        </Links>
      </Section>

      <Section title="Marcadores">
        <Tag title="express" />
        <Tag title="nodejs" />
      </Section>

      <Button title="Voltar" />
    </Container>
  );
}
