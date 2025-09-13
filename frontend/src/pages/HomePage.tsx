import { Header } from '@/components/Header/Header';
import { Main } from '@/components/Main/Main';

import { HomePageContainer } from './HomePage.styled';
export const HomePage = () => {
  return (
    <HomePageContainer>
      <Header />
      <Main />
    </HomePageContainer>
  );
};
