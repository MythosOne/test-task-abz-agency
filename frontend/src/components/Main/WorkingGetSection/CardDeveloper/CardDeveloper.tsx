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
export const CardDeveloper = () => {
  return (
    <Card>
      <WrapperUserAvatar>
        <UserAvatar />
      </WrapperUserAvatar>
      <UserName>
        <Tooltip title="Salvador Stewart Flynn Thomas Salva Salvered">
          <Name>Salvador Stewart Flynn Thomas Salva Salvered............</Name>
        </Tooltip>
      </UserName>
      <UserInfo>
        <Tooltip title="Leading specialist of the department of cent">
          <Position>
            Leading specialist of the department of cent.....................
          </Position>
        </Tooltip>
        <Tooltip title="frontend_develop@gmail.com">
          <Email
            href="mailto:frontend_develop@gmail.com"
            // title="rontend_develop@gmail.com"
          >
            frontend_develop@gmail.com
          </Email>
        </Tooltip>
        <Phone href="tel:+380982784424">+38 (098) 278 44 24</Phone>
      </UserInfo>
    </Card>
  );
};
