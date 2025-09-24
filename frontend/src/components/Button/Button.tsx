import { StyledButton } from './Button.styled';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &{
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
