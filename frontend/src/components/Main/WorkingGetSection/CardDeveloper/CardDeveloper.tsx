import { UserAvatar } from '@/assets/IconsComponents';
import type { User } from '@/types/User';

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

interface CardDeveloperProps {
  user: User;
}
export const CardDeveloper: React.FC<CardDeveloperProps> = ({ user }) => {
  const { name, email, photo, phone, position } = user;
  return (
    <Card>
      <WrapperUserAvatar>
        <UserAvatar src={photo} alt="User Avatar" /> //! Correct the error
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
