import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 115px auto;
  grid-template-areas:
    "header"
    "conteudo";
`;

export const Movie = styled.main`
  grid-area: conteudo;
  margin: 40px 120px 30px 106px;
  padding: 0 24px 15px 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 40px;

  > .movieHeader {
    display: flex;
    flex-direction: column;
    gap: 24px;

    div:first {
      flex-direction: row;
      align-items: center;
      gap: 20px;
    }
  }

  > .tagList {
    width: 100%;
    height: 24px;
  }

  > .movieDescription{
    font-family: ${({ theme }) => theme.FONTS.ROBOTO_SLAB};
    font-weight: 400;
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
    line-height: 1.625;
  }
`;

export const UserInfo = styled.div`
  font-family: ${({ theme }) => theme.FONTS.ROBOTO};
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};

  display: flex;
  align-items: center;
  gap: 8px;

  > img {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};
  }
  > svg {
    color: ${({ theme }) => theme.COLORS.ROSE};
    width: 16px;
    height: 16px;
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

export const TagList = styled.div`
  width: 100%;
  height: 24px;
`;
