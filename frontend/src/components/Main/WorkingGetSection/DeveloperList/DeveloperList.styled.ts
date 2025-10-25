import styled from '@emotion/styled';
import { theme } from '@/theme/theme';

const { breakpoints } = theme;

export const CardList = styled.ul`
  display: grid;
  justify-content: center;
  gap: 29px;

  margin: 0 0 50px 0;

  grid-template-columns: 1fr;

  @media screen and (min-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
