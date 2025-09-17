import { Logo } from '@/components/Header/Logo/Logo';
import { HeaderNav } from '@/components/Header/HeaderNav/HeaderNav';
// import { Button } from '@/components/Button/Button';
// import { Button} from '../Header/Button/Button';

export const Header = () => {
  return (
    <header>
      <Logo />
      <HeaderNav />
      {/* <Button
        variant="users"
        onClick={() => {
          console.log('click Users');
        }}
        label="Users"
        type="button">
        Users
      </Button>
      <Button
        variant="signUp"
        onClick={() => {
          console.log('click Sign Up');
        }}
        label="Sign Up"
        type="button">
        Sign Up
      </Button> */}
      //! Сделать плавный scroll
    </header>
  );
};
