import { StyledButton } from './Button.styled';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'showMore' | 'signUp';
  onClick?: () => void;
  label?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, variant, ...rest }) => {
  return (
    <StyledButton variant={variant} {...rest}>
      {children}
    </StyledButton>
  );
};
