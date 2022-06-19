import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 220px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({theme}) => theme.COLORS.WHITE};

  font-family: ${({theme}) => theme.FONTS.ROBOTO};
  font-weight: regular;
  font-size: 14px;

  padding: 19px 16px;
  resize: none;
  border: none;
  border-radius: 10px;

  ::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
`;
