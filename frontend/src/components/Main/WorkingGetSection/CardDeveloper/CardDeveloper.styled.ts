import styled from '@emotion/styled';
import { theme } from '@/theme/theme';

const { breakpoints } = theme;

export const Card = styled.li`
  --card-mobile-360-width: 328px;
  --card-tablet-768-width: 344px;
  --card-desktop-1024-width: 282px;
  --card-desktop-2560-width: 370px;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;
  width: --card-mobile-360-width;
  height: 254px;
  border-radius: 16px;
  padding: 20px;

  background-color: #fff;

  border: 1px solid #000;

  @media screen and (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    width: var(--card-tablet-768-width);
  }

  @media screen and (min-width: ${breakpoints.desktop}) and (max-width: ${breakpoints.largeDesktop}) {
    width: var(--card-desktop-1024-width);
  }

  @media screen and (min-width: ${breakpoints.largeDesktop}) {
    width: var(--card-desktop-2560-width);
  }
`;

export const WrapperUserAvatar = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
`;

export const UserName = styled.div``;

export const Name = styled.p`
  margin: 20px 0 20px 0;

  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: calc(var(--card-mobile-360-width) - 40px);

  @media screen and (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    width: calc(var(--card-tablet-768-width) - 40px);
  }

  @media screen and (min-width: ${breakpoints.desktop}) and (max-width: ${breakpoints.largeDesktop}) {
    width: calc(var(--card-desktop-1024-width) - 40px);
  }

  @media screen and (min-width: ${breakpoints.largeDesktop}) {
    width: calc(var(--card-desktop-2560-width) - 40px);
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
`;

export const Position = styled.p`
  margin: 0;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Email = styled.a`
  margin: 0;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: calc(var(--card-mobile-360-width) - 40px);
`;

export const Phone = styled.a`
  text-align: center;
`;
