import styled from "styled-components";
import background from "../../assets/background.png";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  display: flex;
  height: 100vh;
`;

export const Form = styled.form`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
    gap: 48px;
  
  padding: 0 8% 0 8%;
  min-width: 328px;
  

  > div {
      text-align: left;
      width: 100%;
    h1 {
      color: ${({ theme }) => theme.COLORS.ROSE};

      font-family: ${({ theme }) => theme.FONTS.ROBOTO_SLAB};
      font-size: 48px;
      font-weight: 700;
    }

    p{
        font-size: 14px;
        color: ${({theme}) => theme.COLORS.GRAY_300};
      font-family: ${({ theme }) => theme.FONTS.ROBOTO_SLAB};

    }
  }
`;

export const Background = styled.div`
  background: url(${background}) no-repeat center;
  
  flex: 1;
`;
