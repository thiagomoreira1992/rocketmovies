import { Container } from "./styles";
import { IoAdd, IoClose } from "react-icons/io5";

export function MovieTag({ isNew , value, onClick, ...rest }) {
  return (
    <Container isNew={isNew}>
      <input type="text" value={value} readOnly={!isNew} {...rest} />

      <button
        type="button"
        onClick={onClick}
      >
        {isNew? <IoAdd size={22}/>: <IoClose size={22}/>}
      </button>
    </Container>
  );
}
