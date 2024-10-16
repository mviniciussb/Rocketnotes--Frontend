import { Container } from "./style";
import { Button } from "../../components/button";

export function Details() {
  return (
    <Container>
      <h1>Hello World!</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
        incidunt maxime, veritatis, impedit nam dignissimos qui dolores animi id
        tempore enim commodi esse fuga vero temporibus iusto fugit maiores
        porro.
      </p>

      <Button title="Entrar" loading />
      <Button title="Cadastrar" />
      <Button title="Voltar" />
    </Container>
  );
}
