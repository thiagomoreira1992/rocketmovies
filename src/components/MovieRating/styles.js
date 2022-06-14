import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  background-color: transparent;
  > h1 {
    font-family: ${({ theme }) => theme.FONTS.ROBOTO_SLAB};
    font-weight: 700;
    font-size: 24px;

    color: ${({theme}) => theme.COLORS.LIGHT_GRAY};
  }
`;

export const Rating = styled.div`
  display: flex;
  gap: 6px;

  > svg {
      width: 12px;
      height: 12px;
      color: ${({theme}) => theme.COLORS.ROSE};
  }
`;
