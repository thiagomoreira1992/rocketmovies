import styled from 'styled-components';

export const Container = styled.span`
  font-family: ${({theme}) => theme.FONTS.ROBOTO};
  font-size: 12px;
  font-weight: 400;
  text-align: center;

  color: ${({theme}) => theme.COLORS.GRAY_100};
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

  padding: 5px 16px;
  margin-right: 8px;

  border-radius: 8px;
`;
