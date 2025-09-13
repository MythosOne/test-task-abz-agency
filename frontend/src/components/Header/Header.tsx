import { Logo } from '@/components/Header/Logo/Logo';
import { HeaderNav } from '@/components/Header/HeaderNav/HeaderNav';
import { Button } from '@/components/Header/Button/Button';
// import { Button} from '../Header/Button/Button';

export const Header = () => {
  return (
    <header>
      <Logo />
      <HeaderNav />
      <Button />
    </header>
  );
};
