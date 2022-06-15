import styled from "styled-components";

export const Container = styled.header`
  margin: 0 auto;
  width: 100%;
  height: 116px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 64px;

  font-family: ${({ theme }) => theme.FONTS.ROBOTO_SLAB};
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};

  padding: 0 12px;

  grid-area: header;

  > div {
    max-width: 630px;
  }

  > h1 {
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.ROSE};
  }

  > div {
    min-width: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 9px;

    img {
      border-radius: 50%;
      border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};
      width: 64px;
      height: 64px;
    }

    div {
      display: flex;
      flex-direction: column;
    }

    div h2 {
      color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
      font-size: 14px;
      font-weight: 700;
      justify-self: flex-end;
      text-align: right;
    }

    a {
      font-weight: 400;
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_200};
      text-align: right;
      align-self: flex-end;
      width: fit-content;
    }
  }
`;
