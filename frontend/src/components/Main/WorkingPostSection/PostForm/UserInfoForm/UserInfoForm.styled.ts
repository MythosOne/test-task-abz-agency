import styled from '@emotion/styled';
import { TextField } from '@mui/material';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const TextFieldStyled = styled(TextField)`
  & .MuiInputLabel-root {
    color: #7e7e7e;
  }

  & label.Mui-focused:not(.Mui-error) {
    color: #7e7e7e;
  }

  & label.Mui-focused.Mui-error {
    color: #d32f2f;
  }

  & .MuiOutlinedInput-root {
    &.Mui-focused:not(.Mui-error) fieldset {
      border-color: #d0cfcf;
    }

    &.Mui-focused.Mui-error fieldset {
      border-color: #d32f2f;
    }

    &.Mui-error fieldset {
      border-color: #d32f2f;
    }
  }

  & .MuiInputBase-input {
    font-size: 16px;
    color: #000;
    line-height: 26px;
  }
`;
