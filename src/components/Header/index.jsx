import { Container } from "./styles";
import { Link } from "react-router-dom";
import { Input } from "../Input";
import { FiSearch } from 'react-icons/fi';

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>
      <Input icon={FiSearch} placeholder="Pesquisar pelo título"/>
      <div>
        <div>
          <h2>Thiago Moreira</h2>
          <a href="/">sair</a>
        </div>
        <img
          src="http://github.com/thiagomoreira1992.png"
          alt="Foto do usuário"
        />
      </div>
    </Container>
  );
}
