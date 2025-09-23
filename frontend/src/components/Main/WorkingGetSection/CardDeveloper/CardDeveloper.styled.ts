import styled from '@emotion/styled';

export const Card = styled.li`
  --card-desktop-2560-width: 330px;
  --card-desktop-1024-width: 242px;
  --card-tablet-768-width: 304px;
  --card-mobile-360-width: 268px;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;
  width: 370px;
  height: 254px;
  border-radius: 16px;
  padding: 20px;

  background-color: #fff;

  border: 1px solid #000;
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
  width: 330px;
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
  width: 330px;
`;

export const Email = styled.a`
  margin: 0;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 330px;
`;

export const Phone = styled.a`
  text-align: center;
`;
