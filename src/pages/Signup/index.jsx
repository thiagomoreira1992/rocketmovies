import { Input } from "../../components/Input";
import { Background, Container, Form } from "./styles";
import {
  IoLockClosedOutline,
  IoMailOutline,
  IoArrowBack,
} from "react-icons/io5";
import { Button } from "../../components/Button";
import { Name } from "../../assets/Name";
import { NavLink } from "../../components/NavLink";

export function SignUp() {
  return (
    <Container>
      <div>
        <Form>
          <div className="title">
            <h1>RocketMovies</h1>
            <p>Aplicação para acompanhar tudo que assistir</p>
          </div>
          <h2>Crie sua conta</h2>
          <div className="inputs">
            <Input placeholder="Nome" type="text" icon={Name} />
            <Input placeholder="E-mail" type="email" icon={IoMailOutline} />
            <Input
              placeholder="Senha"
              type="password"
              icon={IoLockClosedOutline}
            />
          </div>
          <Button title="Cadastrar" height="56px" />
        </Form>
        <NavLink to="/" title="Voltar para o login" icon={IoArrowBack} />
      </div>
      <Background />
    </Container>
  );
}
