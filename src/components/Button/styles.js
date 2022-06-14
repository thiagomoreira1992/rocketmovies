import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.ROSE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  height: ${({height}) => height};
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 16px;
  margin-top: 16px;
  border-radius: 10px;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`;
