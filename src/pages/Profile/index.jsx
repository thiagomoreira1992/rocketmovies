import { Header } from "../../components/Header";
import { Avatar, Container, Form } from "./styles";
import { IoArrowBack, IoCameraOutline, IoMailOutline, IoLockClosedOutline } from "react-icons/io5";
import { NavLink } from "../../components/NavLink";
import { Input } from "../../components/Input";
import { Name } from "../../assets/Name";
import { Button } from "../../components/Button";

export function Profile() {
  return (
    <Container>
      <header>
        <NavLink title="Voltar" to="/" icon={IoArrowBack} />
      </header>
      <Form>
        <Avatar>
          <img src="http://github.com/thiagomoreira1992.png" alt="" />

          <label htmlFor="Avatar">
            <IoCameraOutline />
            <input id="avatar" type="file"/>
          </label>
        </Avatar>
        <Input placeholder="Nome" type="text" icon={Name}/>
        <Input placeholder="E-mail" type="email" icon={IoMailOutline}/>
        <Input placeholder="Senha atual" type="password" icon={IoLockClosedOutline}/>
        <Input placeholder="Nova Senhas" type="password" icon={IoLockClosedOutline}/>
        <Button title="Salvar"  height="48px" disabled/>
      </Form>
    </Container>
  );
}
