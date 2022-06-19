import styled from 'styled-components';

export const Container = styled.a`
  color: ${({theme}) => theme.COLORS.ROSE};
  font-family: ${({theme}) => theme.FONTS.ROBOT_SLAB};
  font-size: 16px;
  font-weight: 400;
  display: flex;
  gap: 8px;
  align-items: center;

  > svg{
    width: 16px;
    height: 16px;
  }
`;
