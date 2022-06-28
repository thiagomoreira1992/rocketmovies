import { Header } from "../../components/Header";
import { NavLink } from "../../components/NavLink";
import { TextArea } from "../../components/TextArea";
import { Container, NewMovie, Title } from "./styles";
import { IoArrowBack } from "react-icons/io5";
import { Input } from "../../components/Input";
import { MovieTag } from "../../components/MovieTag";
import { Button } from "../../components/Button";

export function CreateMovie() {
  return (
    <Container>
      <Header />
      <main>
        <NewMovie>
          <section className="movieHeader">
            <NavLink title="Voltar" to="/" icon={IoArrowBack} />
            <Title>Novo filme</Title>
          </section>
          <section className="movieTitle">
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 à 5)" />
          </section>
          <TextArea placeholder="Observações" />
          <section className="tags">
            <h2>Marcadores</h2>
            <div>
              <MovieTag value="Ação" />
              <MovieTag isNew placeholder="Novo marcador" />
            </div>
          </section>
          <section className="actions">
            <Button deactivated title="Excluir filme" height="56px"/>
            <Button title="Salvar alterações" height="56px"/>
          </section>
        </NewMovie>
      </main>
    </Container>
  );
}
