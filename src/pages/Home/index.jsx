import { Container, Brand, Menu, Search, Content, NewNote } from "./style";
import { Header } from "../../components/header";
import {Section} from "../../components/section"
import { ButtonText } from "../../components/buttonText";
import { FiPlus } from "react-icons/fi";


export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li><ButtonText title="Todos"/></li>
        <li><ButtonText title="Frontend" /></li>
        <li><ButtonText title="Node" /></li>
        <li><ButtonText title="React" /></li>
      </Menu>

      <Search></Search>

      <Content>
        <Section title="Minhas notas" />
      </Content>

      <NewNote><FiPlus/> Criar nota</NewNote>
    </Container>
  );
}
