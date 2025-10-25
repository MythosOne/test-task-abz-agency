import styled from '@emotion/styled';
import { theme } from '@/theme/theme';

const { breakpoints } = theme;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleSection = styled.h2`
  margin: 0 0 50px 0;
  text-align: center;

  @media screen and (min-width: ${breakpoints.tablet}) {
    br {
      display: none;
    }
  }
`;
