import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 115px auto;

  grid-template-areas:
    "header header header"
    "... conteudo ...";
`;

export const Lista = styled.div`
  max-width: 1130px;
  display: grid;
  grid-area: conteudo;
  align-items: center;
  justify-content: space-between;
  grid-template-rows: 80px auto 10px;

  grid-template-areas:
    "h1 button"
    "filmes filmes"
    "test teste";

  padding-top: 30px;
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.FONTS.ROBOTO_SLAB};
  font-weight: 400;
  font-size: 32px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  width: max-content;
  grid-area: h1;
`;

export const NewMovie = styled.a`
  grid-area: button;
  width: 50%;
  background-color: ${({ theme }) => theme.COLORS.ROSE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  height: 48px;
  border: 0;
  display: flex;
  justify-self: end;
  align-items: center;
  justify-content: center;

  padding: 0 30px;
  margin-top: 16px;
  border-radius: 10px;
  font-weight: 500;
  font-family: ${({ theme }) => theme.FONTS.ROBOTO_SLAB};

  > svg {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }
`;

export const MovieList = styled.div`
  width: 100%;
  overflow-y: scroll;
  grid-area: filmes;
  padding-right: 10px;

  display: flex;
  flex-direction: column;
  margin-top: 38px;
  gap: 24px;
`;

export const Movie = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_ROSE};

  width: 100%;
  height: 220px;

  border-radius: 16px;

  padding: 32px;
  > p {
    margin: 15px 0;
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    font-weight: 400;
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    width: 100%;
    height: 56px;
    font-style: normal;
  }
`;
