import styled from '@emotion/styled';

type ButtonProps = {
    variant?: 'showMore' | 'signUp';
    disabled?: boolean;
}

export const StyledButton = styled.button<ButtonProps>`
  height: 34px;
  /* border-radius: 80px; */
  margin: 0 auto;
  border: none;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  width: ${({ variant }) => (variant === 'showMore' ? '120px' : '100px')};
  background-color: ${({ disabled }) => (disabled ? '#B4B4B4' : '#f4e041')};
  color: ${({ disabled }) => (disabled ? '#fff' : '#000000')};
`;
