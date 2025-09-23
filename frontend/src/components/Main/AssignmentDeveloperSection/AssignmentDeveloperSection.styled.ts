import styled from '@emotion/styled';

import { theme } from '@/theme/theme';
import bgImage from '@/assets/background/img_1@1x_lg_2560.jpg';

const { breakpoints } = theme;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  width: 100%;

  @media screen and (min-width: ${breakpoints.desktop}) and (max-width: ${breakpoints.largeDesktop}) {
    height: 650px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${breakpoints.desktop}) and (max-width: ${breakpoints.largeDesktop}) {
    width: 380px;
    height: 257px;
  }
`;

export const Title = styled.h1`
  margin: 0 0 21px 0;
  text-align: center;

  color: #fff;
`;

export const Text = styled.p`
  margin: 0 0 32px 0;
  text-align: center;

  color: #fff;
`;

export const NavContainer = styled.nav``;

export const NavItem = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 34px;
  border-radius: 80px;
  background-color: #f4e041;
`;

export const NavLink = styled.a`
  display: block;
  width: 100%;
  text-align: center;
`;
