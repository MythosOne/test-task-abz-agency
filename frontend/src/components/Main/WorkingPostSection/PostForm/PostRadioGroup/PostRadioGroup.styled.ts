import styled from '@emotion/styled';
import { FormLabel, Radio } from '@mui/material';

export const CustomFormLabel = styled(FormLabel)`
  color: #000 !important;
`;

export const CustomRadio = styled(Radio)`
  color: #d0cfcf;

  &:hover,
  &:focus {
    color: #00bdd3;
  }

  &.Mui-checked {
    color: #00bdd3;
  }
`;
