import { Logo } from '@/components/Header/Logo/Logo';
import { HeaderNav } from '@/components/Header/HeaderNav/HeaderNav';
import { Section } from './Header.styled';

export const Header = () => {
  //!Сделать плавный scroll
  return (
    <Section>
      <Logo />
      <HeaderNav />
    </Section>
  );
};
