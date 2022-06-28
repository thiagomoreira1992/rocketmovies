import styled from "styled-components";
import background from "../../assets/background.png";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  display: flex;
  height: 100vh;

  > div:nth-child(1) {
    align-self: center;
    width: 45%;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 42px;

    min-width: 328px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 48px;

  > .title {
    text-align: left;
    width: 100%;
    max-width: 450px;
    h1 {
      color: ${({ theme }) => theme.COLORS.ROSE};

      font-family: ${({ theme }) => theme.FONTS.ROBOTO_SLAB};
      font-size: 48px;
      font-weight: 700;
    }

    p {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      font-family: ${({ theme }) => theme.FONTS.ROBOTO_SLAB};
    }
  }

  > .inputs {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    max-width: 450px;
  }

  > h2 {
    width: 100%;
    text-align: left;
    max-width: 450px;
    color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
    font-family: ${({ theme }) => theme.FONTS.ROBOTO_SLAB};
    font-weight: 500;
    font-size: 24px;
  }

  > button {
    width: 100%;
    max-width: 450px;
  }
`;

export const Background = styled.div`
  background: url(${background}) no-repeat center;
  background-size: cover;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  opacity: 70%;

  flex: 1;
`;
