import { UserAvatar } from '@/assets/IconsComponents';

import {
  Card,
  WrapperUserAvatar,
  UserName,
  Email,
  Name,
  Phone,
  Position,
  UserInfo,
} from './CardDeveloper.styled';
import { Tooltip } from '@mui/material';

type User = {
  name: string;
  email: string;
  phone: string;
  position: string;
  avatar: string;
};

interface CardDeveloperProps {
  user: User;
}
export const CardDeveloper: React.FC<CardDeveloperProps> = ({ user }) => {
  const { name, email, phone, position } = user;
  return (
    <Card>
      <WrapperUserAvatar>
        <UserAvatar />
      </WrapperUserAvatar>
      <UserName>
        <Tooltip title={name}>
          <Name>{name}</Name>
        </Tooltip>
      </UserName>
      <UserInfo>
        <Tooltip title={position}>
          <Position>{position}</Position>
        </Tooltip>
        <Tooltip title={email}>
          <Email href={email}>{email}</Email>
        </Tooltip>
        <Phone href={phone}>{phone}</Phone>
      </UserInfo>
    </Card>
  );
};
