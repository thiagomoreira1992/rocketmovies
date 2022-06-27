import { Input } from "../../components/Input";
import { Background, Container, Form } from "./styles";
import { IoLockClosedOutline, IoMailOutline } from "react-icons/io5";
import { Button } from "../../components/Button";

export function SignIn() {
  return (
    <Container>
      <Form>
        <div>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir</p>
        </div>
        <h2>Faça seu Login</h2>
        <div>
          <Input placeholder="E-mail" type="email" icon={IoMailOutline} />
          <Input
            placeholder="Senha"
            type="password"
            icon={IoLockClosedOutline}
          />
        </div>
        <Button title="Entrar" height="56px" />
      </Form>
      <Background />
    </Container>
  );
}
