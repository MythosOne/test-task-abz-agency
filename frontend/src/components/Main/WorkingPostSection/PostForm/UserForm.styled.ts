import styled from '@emotion/styled';
import { theme } from '@/theme/theme';

const { breakpoints } = theme;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  width: 328px;

  @media screen and (min-width: ${breakpoints.tablet}) {
    width: 380px;
  }
`;
