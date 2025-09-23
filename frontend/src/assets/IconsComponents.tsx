import logoImg from './logo-image.svg';
import logoText from './logo-text.svg';
import PhotoCover from './photo-cover.svg';

export const LogoImg = () => {
  return <img src={logoImg} alt="Logo Image" />;
};

export const LogoText = () => {
  return <img src={logoText} alt="Logo Text" />;
};

export const UserAvatar = () => {
  return <img src={PhotoCover} alt="User Avatar" />;
};