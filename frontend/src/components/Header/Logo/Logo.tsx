import { LogoImg, LogoText } from '@/assets/IconsComponents';
import { LogoWrapper } from './Logo.styled';

export const Logo = () => {
  return (
    <LogoWrapper href='#developerSection'>
      <LogoImg />
      <LogoText />
    </LogoWrapper>
  );
};
