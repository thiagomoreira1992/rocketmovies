import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > header {
    height: 144px;
    display: flex;
    background-color: ${({ theme }) => theme.COLORS.DARK_ROSE};

    padding-left: 144px;
    align-items: center;
  }
`;

export const Form = styled.form`
  max-width: 340px;

  margin: 30px auto 0;


  > div:nth-child(n+2){
      margin-bottom: 8px;
  }
  > div:nth-child(4) , button{
      margin-top: 16px;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -124px auto 64px;

  width: 186px;
  height: 186px;

  > img {
    border-radius: 50%;
    width: 186px;
    height: 186px;
  }

  > label {
    position: absolute;
    bottom: 4px;
    right: 10px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.COLORS.ROSE};

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    input {
      display: none;
    }

    svg{
        width: 20px;
        height: 20px;
        color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    }
  }
`;
