import { Input } from "../../components/Input";
import { Background, Container, Form } from "./styles";
import { IoLockClosedOutline, IoMailOutline } from "react-icons/io5";
import { Button } from "../../components/Button";
import { NavLink } from "../../components/NavLink";

export function SignIn() {
  return (
    <Container>
      <div>
        <Form>
          <div className="title">
            <h1>RocketMovies</h1>
            <p>Aplicação para acompanhar tudo que assistir</p>
          </div>
          <h2>Faça seu Login</h2>
          <div className="inputs">
            <Input placeholder="E-mail" type="email" icon={IoMailOutline} />
            <Input
              placeholder="Senha"
              type="password"
              icon={IoLockClosedOutline}
            />
          </div>
          <Button title="Entrar" height="56px" />
        </Form>
        <NavLink to="/register" title="Criar conta"/>
      </div>
      <Background />
    </Container>
  );
}
