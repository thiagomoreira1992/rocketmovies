import { Container, Rating } from "./styles";
import { IoStarOutline, IoStar } from "react-icons/io5";

function countStars(rating) {
  switch (rating) {
    case 0:
        return (
          <>
            <IoStarOutline />
            <IoStarOutline />
            <IoStarOutline />
            <IoStarOutline />
            <IoStarOutline />
          </>
        );
    case 1:
      return (
        <>
          <IoStar />
          <IoStarOutline />
          <IoStarOutline />
          <IoStarOutline />
          <IoStarOutline />
        </>
      );
    case 2:
      return (
        <>
          <IoStar />
          <IoStar />
          <IoStarOutline />
          <IoStarOutline />
          <IoStarOutline />
        </>
      );
    case 3:
      return (
        <>
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStarOutline />
          <IoStarOutline />
        </>
      );
    case 4:
      return (
        <>
          <IoStar />
          <IoStar/>
          <IoStar />
          <IoStar />
          <IoStarOutline />
        </>
      );
    case 5:
      return (
        <>
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStar />
        </>
      );

    default:        
      break;
  }
}

export function MovieRating({ title, rating, fontSize = 24, ...rest }) {
  return (
    <Container fontSize={fontSize}>
      <h1>{title}</h1>

      <Rating>{countStars(rating)}</Rating>
    </Container>
  );
}
