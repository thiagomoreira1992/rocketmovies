import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-family: ${({ theme }) => theme.FONTS.ROBOT_SLAB};

  font-size: 14px;
  font-weight: 400;

  width: 100%;
  display: flex;
  align-items: center;

  border-radius: 10px;

  > input {
    height: 56px;
    width: 100%;

    padding: 12px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }

    &:target{
        border: 0;
    }
  }

  > svg {
      margin-left:16px;
  }
`;
