import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 115px auto;

  grid-template-areas:
    "header"
    "conteudo";

  > main {
    grid-area: conteudo;
    overflow-y: auto;
    margin: 40px 120px 30px;
    padding: 0 20px 10px;
  }
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.FONTS.ROBOTO_SLAB};
  font-weight: 500;
  font-size: 36px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  width: max-content;
  grid-area: h1;
`;

export const NewMovie = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: flex-start;

  > .movieHeader {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  > .movieTitle {
    display: flex;
    gap: 40px;
  }

  > .tags {
    width: 100%;
    height: 135px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    > h2 {
      font-family: ${({ theme }) => theme.FONTS.ROBOTO_SLAB};
      font-size: 20px;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
    > div {
      display: flex;
      width: 100%;
      height: 85px;
      flex-direction: row;
      gap: 24px;
      align-items: center;
      padding: 16px;
      border-radius: 10px;

      background-color: ${({ theme }) => theme.COLORS.BLACK};
    }
  }

  > .actions{
    display: flex;
    gap: 40px;
    padding: 0;
    align-items: center;
    height: 56px;
  }
`;
