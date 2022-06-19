import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;


  font-family: ${({theme}) => theme.FONTS.ROBOTO};

  background: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.BACKGROUND_800};
  color: ${({ theme, isNew }) =>
    isNew ? theme.COLORS.GRAY_200 : theme.COLORS.WHITE};
  border: ${({ theme, isNew }) =>
    isNew ? `2px dashed ${theme.COLORS.GRAY_200}` : "none"};

    border-radius: 10px;

    > button{
        color: ${({theme}) => theme.COLORS.ROSE};
        border: none;
        background: none;
    }

  > input {
    height: 56px;
    width: 60%;
    color:${({theme}) => theme.COLORS.WHITE};

    background: transparent;
    padding: 16px;
    border: none;
    outline: none;

    cursor: ${({isNew}) => isNew ? "text": "default"};

    &::placeholder{

        color:${({theme}) => theme.COLORS.GRAY_200};
    }
  }
`;
